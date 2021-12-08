import {
    Reducer,
    applyMiddleware,
    createStore as originalCreateStore,
    combineReducers as originalCombineReducers,
    compose,
} from 'redux';
import createSagaMiddleware, { Saga, Task } from 'redux-saga';
import set from 'lodash/set';
import has from 'lodash/has';
import { composeWithDevTools } from 'redux-devtools-extension';
import { take, fork, cancel } from 'redux-saga/effects';

interface Sagas {
    [key: string]: Saga
}

interface Reducers {
    [key: string]: Reducer
}

interface ExtendedStore extends ReturnType<typeof originalCreateStore> {
    addedReducers?: any[]
}

const addedReducers: Reducers = {};
const addedSagas: Sagas = {};
let store: ExtendedStore | undefined;

const sagaMiddleware = createSagaMiddleware();
const STOP_SAGA = '@@createStore/STOP_SAGA';

// Modified original combineReducers to work recursively.
const combineReducers = (reducers: Reducer | Record<string, Reducer>) => {
    // Leaf or already combined
    if (typeof reducers === 'function') {
        return reducers;
    }

    // If this is an object, combine reducers.
    if (typeof reducers === 'object') {
        const combinedReducers: any = {};
        const keys = Object.keys(reducers);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            combinedReducers[key] = combineReducers(reducers[key]);
        }
        return originalCombineReducers(combinedReducers);
    }

    // If there is an invalid item
    throw new Error('Invalid reducer provided');
};

const createSaga = (key: string, saga: Saga): any => {
    if (develMode) {
        return function* main() {
            const sagaTask: Task = yield fork(saga);
            const { payload } = yield take(STOP_SAGA);

            if (payload === key) {
                yield cancel(sagaTask);
            }
        };
    }
    return saga;
};

const startSaga = (key: string, saga: Saga) => {
    sagaMiddleware.run(createSaga(key, saga));
};

const stopSaga = (key: string) => {
    if (store) {
        store.dispatch({
            type: STOP_SAGA,
            payload: key,
        });
    }
};

const addSaga = (key: string, saga: Saga, force = true) => {
    // add saga before creating store
    if (!store) {
        if (addedSagas[key]) {
            throw new Error('Adding multiple sagas with same key: ' + key);
        }
        addedSagas[key] = saga;
    } else {
        const sagaKeys = Object.keys(addedSagas);
        const exists = sagaKeys.includes(key);

        if (!exists || force) {
            if (!exists) {
                addedSagas[key] = saga;
            }
            if (force) {
                stopSaga(key);
            }

            startSaga(key, saga);
        }
    }
};

// createStore to work with adding sagas and reducers
const createStore = (initialReducers = []): ExtendedStore => {
    if (!store) {
        const finalReducers: any = {
            ...initialReducers,
            ...addedReducers,
        };

        const composeEnhancers = ((develMode ? composeWithDevTools : null) || compose) as typeof compose;

        // @ts-ignore TODO types
        store = originalCreateStore(
            combineReducers(finalReducers),
            composeEnhancers(applyMiddleware(sagaMiddleware)),
        );

        // @ts-ignore TODO types
        store.addedReducers = finalReducers;

        for (const key in addedSagas) {
            if (Object.prototype.hasOwnProperty.call(addedSagas, key)) {
                addSaga(key, addedSagas[key]);
            }
        }
    }

    return store as ExtendedStore;
};

const addReducer = (key: string, reducer: Reducer<any, any>, force = false) => {
    if (!store) {
        set(addedReducers, key, reducer);
    } else {
        // If already set, do nothing.
        if (!has(store.addedReducers, key) || force) {
            // @ts-ignore
            set(store.addedReducers, key, reducer);
            // @ts-ignore
            store.replaceReducer(combineReducers(store.addedReducers));
        }
    }
};

export { createStore, addReducer, addSaga };

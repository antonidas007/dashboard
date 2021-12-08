import { all, call, fork, takeLatest, put } from 'redux-saga/effects';
import { getUser, getUsers } from '@app/services/usersService';
import { GetUserAction, UsersActionTypes } from '@app/types/usersTypes';
import { storeUserAction, storeUsersAction } from '@app/redux/actions/usersActions';

export function* getUsersSaga(): Generator {
    try {
        const users = (yield call(getUsers)) as Awaited<ReturnType<typeof getUsers>>;
        yield put(storeUsersAction(users.data));
    } catch (e) {
        // Nothing to do yet :/
    }
}

export function* getUserSaga(action: GetUserAction): Generator {
    const id = action.payload;
    try {
        const user = (yield call(getUser, '' + action.payload)) as Awaited<ReturnType<typeof getUser>>;
        yield put(storeUserAction({
            id,
            user: user.data,
        }));
    } catch (e) {
        yield put(storeUserAction({
            id,
            user: null,
        }));

        return;
    }
}

function* watchSagas(): Generator {
    yield takeLatest(UsersActionTypes.GET_USERS, getUsersSaga);
    yield takeLatest(UsersActionTypes.GET_USER, getUserSaga);
}

export function* usersSagas(): Generator {
    yield all([fork(watchSagas)]);
}

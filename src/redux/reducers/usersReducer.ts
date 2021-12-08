import { Reducer } from 'redux';
import { UsersAction, UsersActionTypes, UsersState } from '@app/types';

export const initialState: UsersState = {};

export const usersReducer: Reducer<UsersState, UsersAction> = (state = initialState, action) => {
    switch (action.type) {
    case UsersActionTypes.STORE_USERS: {
        const newState: UsersState = {};

        action.payload.forEach((user) => {
            newState[user.id] = user;
        });

        return newState;
    }
    case UsersActionTypes.STORE_USER: {
        const newState: UsersState = { ...state };

        newState[action.payload.id] = action.payload.user;

        return newState;
    }
    default:
        return state;
    }
};

import { action } from 'typesafe-actions';
import {
    GetUsersAction,
    IUser,
    UsersActionTypes,
    StoreUsersAction,
    StoreUserAction,
    GetUserAction,
} from '@app/types/usersTypes';

export const getUsersAction = (): GetUsersAction => action(UsersActionTypes.GET_USERS);

export const getUserAction = (payload: string): GetUserAction =>
    action(UsersActionTypes.GET_USER, payload);

export const storeUsersAction = (payload: IUser[]): StoreUsersAction =>
    action(UsersActionTypes.STORE_USERS, payload);

export const storeUserAction = (payload: { id: string, user: IUser | null, }): StoreUserAction =>
    action(UsersActionTypes.STORE_USER, payload);

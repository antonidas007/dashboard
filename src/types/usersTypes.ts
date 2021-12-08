export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: IAddress
    phone: string
    website: string
    company: ICompany
}

export interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string,
        lng: string,
    }
}

export interface ICompany {
    name: string
    catchPhrase: string
    bs: string
}

export enum UsersActionTypes {
    GET_USERS = '@@Users/GET_USERS',
    GET_USER = '@@Users/GET_USER',
    STORE_USERS = '@@Users/STORE_USERS',
    STORE_USER = '@@Users/STORE_USER',
}

export interface GetUsersAction {
    type: typeof UsersActionTypes.GET_USERS
}

export interface GetUserAction {
    type: typeof UsersActionTypes.GET_USER
    payload: string
}

export interface StoreUsersAction {
    type: typeof UsersActionTypes.STORE_USERS
    payload: IUser[]
}

export interface StoreUserAction {
    type: typeof UsersActionTypes.STORE_USER
    payload: { id: string, user: IUser | null, }
}

export type UsersState = Record<string, IUser | null>

export type UsersAction =
    | GetUsersAction
    | StoreUserAction
    | StoreUsersAction;


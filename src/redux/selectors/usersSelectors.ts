import { IUser, UsersState } from '@app/types/usersTypes';
import { ReduxState } from '@app/config/configuration';

export const selectUsers = (state: ReduxState): UsersState => {
    return state.users;
};

export const selectUser = (id: string) => (state: ReduxState): IUser | null | undefined => {
    return state.users[id];
};

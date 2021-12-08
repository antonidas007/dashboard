import axios, { AxiosResponse } from 'axios';
import { apis } from '@app/config/apis';
import { IUser } from '@app/types/usersTypes';

export async function getUsers(): Promise<AxiosResponse<IUser[]>> {
    return await axios.get(apis.USERS);
}

export async function getUser(id: string): Promise<AxiosResponse<IUser>> {
    return await axios.get(apis.USER(id));
}

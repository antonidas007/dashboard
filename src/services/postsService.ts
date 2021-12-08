import axios, { AxiosResponse } from 'axios';
import { apis } from '@app/config/apis';
import { IComment, IPost } from '@app/types/postsTypes';

export async function getPosts(): Promise<AxiosResponse<IPost[]>> {
    return await axios.get(apis.POSTS);
}

export async function getPost(id: string): Promise<AxiosResponse<IPost>> {
    return await axios.get(apis.POST(id));
}

export async function getPostComments(id: string): Promise<AxiosResponse<IComment[]>> {
    return await axios.get(apis.COMMENTS(id));
}

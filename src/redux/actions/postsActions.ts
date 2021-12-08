import { action } from 'typesafe-actions';
import {
    GetPostAction,
    GetPostsAction,
    IComment,
    IPost,
    PostsActionTypes, StorePostAction, StorePostCommentsAction,
    StorePostsAction,
} from '@app/types/postsTypes';

export const getPostsAction = (): GetPostsAction => action(PostsActionTypes.GET_POSTS);

export const getPostAction = (payload: string): GetPostAction => action(PostsActionTypes.GET_POST, payload);

export const storePostAction = (payload: { id: string, post: IPost | null, }): StorePostAction => action(PostsActionTypes.STORE_POST, payload);

export const storePostCommentsAction = (payload: { id: string, comments: IComment[], }): StorePostCommentsAction => action(PostsActionTypes.STORE_POST_COMMENTS, payload);

export const storePostsAction = (payload: IPost[]): StorePostsAction =>
    action(PostsActionTypes.STORE_POSTS, payload);

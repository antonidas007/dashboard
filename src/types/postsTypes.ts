export interface IPost {
    userId: number
    id: number
    title: string
    body: string
    comments?: IComment[]
}

export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type PostsState = Record<string, IPost | null> | null;

export enum PostsActionTypes {
    GET_POSTS = '@@posts/GET_POSTS',
    GET_POST = '@@posts/GET_POST',
    STORE_POSTS = '@@posts/STORE_POSTS',
    STORE_POST = '@@posts/STORE_POST',
    STORE_POST_COMMENTS = '@@posts/STORE_POST_COMMENTS',
}

export interface GetPostsAction {
    type: typeof PostsActionTypes.GET_POSTS
}

export interface GetPostAction {
    type: typeof PostsActionTypes.GET_POST
    payload: string
}

export interface StorePostsAction {
    type: typeof PostsActionTypes.STORE_POSTS
    payload: IPost[]
}

export interface StorePostAction {
    type: typeof PostsActionTypes.STORE_POST
    payload: { id: string, post: IPost | null, }
}

export interface StorePostCommentsAction {
    type: typeof PostsActionTypes.STORE_POST_COMMENTS
    payload: { id: string, comments: IComment[], }
}

export type PostsAction =
    | GetPostsAction
    | GetPostAction
    | StorePostAction
    | StorePostCommentsAction
    | StorePostsAction;


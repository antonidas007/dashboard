import { IPost, PostsState } from '@app/types';
import { ReduxState } from '@app/config/configuration';

export const selectPosts = (state: ReduxState): PostsState => {
    return state.posts;
};

export const selectPost = (id: string) => (state: ReduxState): IPost | undefined | null => {
    return state.posts ? state.posts[id] : undefined;
};

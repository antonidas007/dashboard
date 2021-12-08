import { Reducer } from 'redux';
import { PostsAction, PostsActionTypes, PostsState } from '@app/types/postsTypes';

export const initialState: PostsState = null;

export const postsReducer: Reducer<PostsState, PostsAction> = (state = initialState, action) => {
    switch (action.type) {
    case PostsActionTypes.STORE_POSTS: {
        const newState: PostsState = {
            ...(state || {}),
        };

        action.payload.forEach((post) => {
            newState[post.id] = {
                ...(newState[post.id] || {}),
                ...post,
            };
        });

        return newState;
    }
    case PostsActionTypes.STORE_POST: {
        const newState: PostsState = {
            ...(state || {}),
        };

        if (action.payload.post) {
            newState[action.payload.id] = {
                ...(newState[action.payload.id] || {}),
                ...action.payload.post,
            };
        } else {
            newState[action.payload.id] = action.payload.post;
        }

        return newState;
    }
    case PostsActionTypes.STORE_POST_COMMENTS: {
        const newState: PostsState = {
            ...(state || {}),
        };

        const post = newState[action.payload.id];

        if (post) {
            newState[action.payload.id] = {
                ...post,
                comments: action.payload.comments,
            };
        }

        return newState;
    }
    default:
        return state;
    }
};

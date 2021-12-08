import { all, call, fork, takeLatest, put, select } from 'redux-saga/effects';
import { getPost, getPostComments, getPosts } from '@app/services/postsService';
import { GetPostAction, PostsActionTypes } from '@app/types/postsTypes';
import { storePostAction, storePostCommentsAction, storePostsAction } from '@app/redux/actions/postsActions';
import { getUsersSaga } from '@app/redux/sagas/usersSaga';
import { selectPost } from '@app/redux/selectors/postsSelectors';
import { getUser } from '@app/services/usersService';
import { storeUserAction } from '@app/redux/actions/usersActions';

export function* getPostsSaga(): Generator {
    try {
        const [posts] = (yield all([
            call(getPosts),
            call(getUsersSaga),
        ])) as [Awaited<ReturnType<typeof getPosts>>];

        yield put(storePostsAction(posts.data));
    } catch (e) {
        // No error messages yet
        yield put(storePostsAction([]));
    }
}

export function* getPostSaga(action: GetPostAction): Generator {
    const id = action.payload;
    const postSelected = yield select(selectPost(id));

    // null or undefined
    if (!postSelected) {
        try {
            const post = (yield call(getPost, id)) as Awaited<ReturnType<typeof getPost>>;
            yield put(storePostAction({
                id,
                post: post.data,
            }));

            const user = (yield call(getUser, '' + post.data.userId)) as Awaited<ReturnType<typeof getUser>>;

            yield put(storeUserAction({
                id: '' + post.data.userId,
                user: user.data,
            }));
        } catch (e) {
            yield put(storePostAction({
                id,
                post: null,
            }));

            return;
        }
    }

    try {
        const comments = (yield call(getPostComments, id)) as Awaited<ReturnType<typeof getPostComments>>;
        yield put(storePostCommentsAction({
            id,
            comments: comments.data,
        }));
    } catch (e) {
        yield put(storePostCommentsAction({
            id,
            comments: [],
        }));
    }
}

function* watchSagas(): Generator {
    yield takeLatest(PostsActionTypes.GET_POSTS, getPostsSaga);
    yield takeLatest(PostsActionTypes.GET_POST, getPostSaga);
}

export function* postsSagas(): Generator {
    yield all([fork(watchSagas)]);
}

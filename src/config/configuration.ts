import axios from 'axios';
import translate from 'counterpart';
import en from '@app/locale/en';
import { addReducer, addSaga } from '@app/utils';
import { postsReducer } from '@app/redux/reducers/postsReducer';
import { PostsState, UsersState } from '@app/types';
import { usersReducer } from '@app/redux/reducers/usersReducer';
import { postsSagas } from '@app/redux/sagas/postsSaga';
import { usersSagas } from '@app/redux/sagas/usersSaga';

const locale = process.env.REACT_APP_LOCALE || 'en';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
translate.registerTranslations('en', en);
translate.setLocale(locale);

addReducer('users', usersReducer);
addReducer('posts', postsReducer);

addSaga('users', usersSagas);
addSaga('posts', postsSagas);

export interface ReduxState {
    users: UsersState
    posts: PostsState
}

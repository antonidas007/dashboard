import { memo, useEffect } from 'react';
import { Page } from '@app/components/Page';
import { Post } from '@app/components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAction } from '@app/redux/actions/postsActions';
import { selectPost } from '@app/redux/selectors/postsSelectors';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '@app/pages/NotFoundPage';
import { CircularProgress } from '@mui/material';
import { selectUser } from '@app/redux/selectors/usersSelectors';

export const PostDetailPage = memo(() => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(selectPost(id || ''));
    const userSelect = useSelector(selectUser(post?.userId + '' || ''));
    const user = post === null ? null : userSelect;

    useEffect(() => {
        id && dispatch(getPostAction(id));
    }, [id]);

    if (!id || post === null || user === null) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <Page
            titleKey={'title.post'}
        >
            {post && user &&
                <Post
                    key={post.id}
                    id={'' + post.id}
                    userId={'' + user.id}
                    title={post.title}
                    body={post.body}
                    author={user.name}
                    comments={post.comments || null}
                    showBack={true}
                />
            }
            {(!post || !user) && <CircularProgress />}
        </Page>
    );
});

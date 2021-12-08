import { memo, useEffect } from 'react';
import { Page } from '@app/components/Page';
import { Box, Typography } from '@mui/material';
import { Post } from '@app/components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '@app/redux/actions/postsActions';
import { selectPosts } from '@app/redux/selectors/postsSelectors';
import { selectUsers } from '@app/redux/selectors/usersSelectors';
import { CircularProgress } from '@mui/material';
import translate from 'counterpart';

const PostSx = { my: 1 };

// There should probably be pagination, but as we know, there are only 100 posts, we are ok for now.
// If there are more posts, more effective would be getting only few rows, not all of them.
export const HomePage = memo(() => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const users = useSelector(selectUsers);
    const postsValues = posts && Object.values(posts);

    useEffect(() => {
        dispatch(getPostsAction());
    }, []);

    return (
        <Page
            titleKey={'title.posts'}
        >
            <Box
                sx={{
                    my: -1,
                }}
            >
                {!postsValues && <CircularProgress />}
                {postsValues && !postsValues.length &&
                    <Typography variant={'h6'}>
                        {translate('posts.empty')}
                    </Typography>
                }
                {postsValues && postsValues.map((post) => {
                    if (!post) {
                        return null;
                    }

                    const user = users[post.userId];

                    if (!user) {
                        return null;
                    }

                    return (
                        <Post
                            key={post.id}
                            id={'' + post.id}
                            userId={'' + user.id}
                            title={post.title}
                            body={post.body}
                            author={user.name}
                            sx={PostSx}
                        />
                    );
                })}
            </Box>
        </Page>
    );
});

import { memo, Fragment } from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, CardProps, CircularProgress, Divider, IconButton, Link, Typography } from '@mui/material';
import { getContrastColor, stringToColor } from '@app/utils/colorUtils';
import { firstLetterUppercase, getInitials } from '@app/utils/stringUtils';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IComment } from '@app/types';
import translate from 'counterpart';
import { route } from '@app/config';

export interface PostProps extends CardProps {
    id: string
    userId: string
    title: string
    body: string
    author: string
    // Flag to show back button
    showBack?: boolean
    // undefined - no comments, null - loading state, array - loaded content
    comments?: IComment[] | null
}

export const Post = memo(({ title, body, author, sx, showBack, comments, id, userId, ...otherProps }: PostProps) => {
    const avatarColor = stringToColor(author);
    const contrastText = getContrastColor(avatarColor);
    const navigate = useNavigate();
    const urlPost = route.post(id);
    const urlAuthor = route.user(userId);
    const initials = getInitials(author);

    return (
        <Card
            variant={'outlined'}
            sx={{
                borderRadius: 4,
                textShadow: '0px 0px 2px rgba(255,255,255,0.5)',
                ...sx,
            }}
            {...otherProps}
        >
            <CardHeader
                title={showBack ? firstLetterUppercase(title) : (
                    <Link
                        href={urlPost}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(urlPost);
                        }}
                    >
                        {firstLetterUppercase(title)}
                    </Link>
                )}
                titleTypographyProps={{
                    variant: 'h5',
                }}
                subheader={
                    <Link
                        href={urlAuthor}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(urlAuthor);
                        }}
                    >
                        {author}
                    </Link>
                }
                avatar={
                    <Avatar
                        sx={{
                            bgcolor: avatarColor,
                            color: contrastText,
                        }}
                    >
                        {initials}
                    </Avatar>
                }
                action={showBack ? (
                    <IconButton
                        onClick={() => {
                            navigate(route.posts);
                        }}
                    >
                        <KeyboardBackspaceIcon />
                    </IconButton>
                ) : undefined}
            />
            <Divider />
            <CardContent>
                <Typography variant="body1">
                    {body}
                </Typography>
            </CardContent>
            {comments !== undefined &&
                <Fragment>
                    <CardContent sx={{ mt: 2 }}>
                        <Typography
                            variant="h5"
                            sx={{ mb: 2 }}
                        >
                            {translate('post.comments')}
                        </Typography>
                        {!comments && <CircularProgress />}
                        {comments &&
                            <Box
                                sx={{
                                    my: -1,
                                }}
                            >
                                {comments.map((comment) => {
                                    return (
                                        <Card
                                            key={comment.id}
                                            variant={'outlined'}
                                            sx={{
                                                borderRadius: 4,
                                                bgcolor: 'info.main',
                                                color: 'info.contrastText',
                                                my: 1,
                                            }}
                                            {...otherProps}
                                        >
                                            <CardHeader
                                                title={comment.name}
                                                subheader={comment.email}
                                            />
                                            <CardContent>
                                                {comment.body}
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </Box>
                        }
                    </CardContent>
                </Fragment>
            }
        </Card>
    );
});

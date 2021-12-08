import {
    AppBar,
    Button,
    Container,
    useTheme,
    Typography,
    useScrollTrigger,
    Link,
} from '@mui/material';
import translate from 'counterpart';
import { getMenu } from '@app/config';
import { useNavigate } from 'react-router-dom';
import { Fragment, MouseEvent } from 'react';
import { route } from '@app/config';

const HEIGHT = 100;
const COMPACT_HEIGHT = 60;

export const Header = () => {
    const theme = useTheme();
    const trigger = useScrollTrigger();
    const navigate = useNavigate();

    return (
        <Fragment>
            <AppBar
                position={'fixed'}
                sx={{
                    height: trigger ? COMPACT_HEIGHT : HEIGHT,
                    boxShadow: trigger ? 2 : 0,
                    transition: theme.transitions.create('height'),
                    justifyContent: 'center',
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        flexDirection: 'row',
                    }}
                >
                    <Typography
                        variant="h4"
                        noWrap={true}
                        component={Link}
                        href={route.posts}
                        underline={'none'}
                        onClick={(e: MouseEvent<HTMLElement>) => {
                            e.preventDefault();
                            navigate(route.posts);
                        }}
                        sx={{ mr: 4, color: 'white' }}
                    >
                        {translate('app.title')}
                    </Typography>
                    <span>
                        {getMenu().map((item) => (
                            <Button
                                key={item.name}
                                component={'a'}
                                href={item.url}
                                onClick={(e: MouseEvent<HTMLElement>) => {
                                    e.preventDefault();
                                    navigate(item.url);
                                }}
                                sx={{
                                    mx: 1,
                                    color: 'white',
                                    display: 'inline-flex',
                                    '&:hover': {
                                        background: 'rgba(255,255,255, 0.1)',
                                    },
                                }}
                            >
                                {translate('title.' + item.name)}
                            </Button>
                        ))}
                    </span>
                </Container>
            </AppBar>
            <div css={{ height: HEIGHT }} />
        </Fragment>
    );
};

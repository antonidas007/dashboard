import { memo } from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, CardProps, Divider, Grid, IconButton, Typography } from '@mui/material';
import { IUser } from '@app/types';
import { getContrastColor, getInitials, stringToColor } from '@app/utils';
import { route } from '@app/config';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import translate from 'counterpart';

export interface UserProps extends CardProps {
    user: IUser
}

export const User = memo(({ user, sx, ...otherProps }: UserProps) => {
    const avatarColor = stringToColor(user.name);
    const contrastText = getContrastColor(avatarColor);
    const navigate = useNavigate();
    const initials = getInitials(user.name);

    const items = [
        {
            name: 'profile',
            items: Object.keys(user).filter(str => ['name', 'address', 'company'].indexOf(str) === -1),
            values: user,
        },
        {
            name: 'address',
            items: Object.keys(user.address),
            values: user.address,
        },
        {
            name: 'company',
            items: Object.keys(user.company),
            values: user.company,
        },
    ];

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
                title={user.name}
                titleTypographyProps={{
                    variant: 'h5',
                }}
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
                action={
                    <IconButton
                        onClick={() => {
                            navigate(route.posts);
                        }}
                    >
                        <KeyboardBackspaceIcon />
                    </IconButton>
                }
            />
            <Divider />
            <CardContent>
                <Grid
                    container={true}
                    spacing={5}
                >
                    {items.map(section => {
                        return (
                            <Grid
                                key={section.name}
                                item={true}
                                md={4}
                                sm={12}
                            >
                                <Typography
                                    variant={'h5'}
                                    gutterBottom={true}
                                >
                                    {translate('user.' + section.name)}
                                </Typography>
                                {section.items.map((title) => {
                                    let content = (section.values as Record<string, any>)[title];

                                    if (typeof content !== 'string') {
                                        content = JSON.stringify(content);
                                    }

                                    return (
                                        <Box key={title}>
                                            <Typography variant={'body2'}>
                                                {title}
                                            </Typography>
                                            <Typography
                                                variant={'body1'}
                                                sx={{ fontWeight: 'bold' }}
                                                gutterBottom={true}
                                            >
                                                {content}
                                            </Typography>
                                        </Box>
                                    );
                                })}
                            </Grid>
                        );
                    })}
                </Grid>
            </CardContent>
        </Card>
    );
});

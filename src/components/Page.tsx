import { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Container, ContainerProps, Typography } from '@mui/material';
import translate from 'counterpart';

export interface PageProps extends ContainerProps {
    titleKey?: string
}

export const Page = memo(({ children, titleKey = '' }: PageProps) => {
    const title = titleKey && translate(titleKey);

    return (
        <Container
            maxWidth="xl"
            sx={{
                my: 4,
            }}
        >
            {title &&
                <Typography
                    variant="h5"
                    noWrap={true}
                    component="div"
                    sx={{
                        pb: 2,
                    }}
                >
                    {title}
                </Typography>
            }
            <Helmet>
                <title>{`${title ? (title + ' - ') : ''}${translate('app.title')}`}</title>
                <meta
                    name="description"
                    content={translate('app.description')}
                />
            </Helmet>
            {children}
        </Container>
    );
});

import { Global } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Fragment } from 'react';

export const GlobalStyles = () => {
    return (
        <Fragment>
            <CssBaseline />
            <Global
                styles={{
                    'body': {
                        background: '#F3F4F9',
                    },
                }}
            />
        </Fragment>
    );
};

import { Fragment, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@app/components';

export const Layout = memo(() => {
    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    );
});

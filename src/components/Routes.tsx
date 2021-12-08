import { routes } from '@app/config';
import { useRoutes } from 'react-router-dom';

export const Routes = () => {
    return (
        useRoutes(routes)
    );
};


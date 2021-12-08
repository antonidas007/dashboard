import { Layout } from '@app/components/Layout';
import { HomePage, NotFoundPage, PostDetailPage, UserDetailPage } from '@app/pages';

export const route = {
    posts: '/',
    post: (id: string) => `/post/${id}`,
    user: (id: string) => `/user/${id}`,
};

export const routes = [
    {
        path: '*',
        element: <Layout />,
        children: [
            {
                path: '*', element: <NotFoundPage />,
            },
            {
                path: '', element: <HomePage />,
            },
            {
                path: 'post/:id', element: <PostDetailPage />,
            },
            {
                path: 'user/:id', element: <UserDetailPage />,
            },
        ],
    },
];


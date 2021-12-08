
export const apis = {
    POSTS: '/posts',
    USERS: '/users',
    POST: (id: string) => `/posts/${id}`,
    COMMENTS: (id: string) => `/posts/${id}/comments`,
    USER: (id: string) => `/users/${id}`,
};


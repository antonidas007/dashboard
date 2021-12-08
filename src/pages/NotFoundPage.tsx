import { memo } from 'react';
import { Page } from '@app/components';

export const NotFoundPage = memo(() => {
    return (
        <Page
            titleKey={'title.notFound'}
        />
    );
});

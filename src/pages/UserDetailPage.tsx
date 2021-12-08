import { memo, useEffect } from 'react';
import { Page } from '@app/components/Page';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from '@app/pages/NotFoundPage';
import { CircularProgress } from '@mui/material';
import { selectUser } from '@app/redux/selectors/usersSelectors';
import { User } from '@app/components';
import { getUserAction } from '@app/redux/actions/usersActions';

export const UserDetailPage = memo(() => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(selectUser(id || ''));

    useEffect(() => {
        id && dispatch(getUserAction(id));
    }, [id]);

    if (!id || user === null) {
        return (
            <NotFoundPage />
        );
    }

    return (
        <Page
            titleKey={'title.user'}
        >
            {user &&
                <User user={user} />
            }
            {!user && <CircularProgress />}
        </Page>
    );
});

import React, { useState, useEffect } from 'react';
import Logrocket from 'logrocket';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { GET_OWN_USER } from '../graphql/queries';
import { updateUser, postAlert } from '../actions';
import { getCookie, AUTH_TOKEN, destroy } from '../apis';

const ACCOUNT_ERROR = 'Something went wrong fetching your account please try logging in again';

export const useAuth = ({ protection = 'none' }) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const [showLoading, setShowLoading] = useState(!user?.authenticated);

  const router = useRouter();

  const hasAuth = user?.authenticated;

  const onGetUserSuccess = ({ userData }) => {
    const { username, _id, email } = userData;

    if (Logrocket) {
      Logrocket.identify(_id, {
        name: username,
        email,
      });
    }

    dispatch(updateUser(userData));

    return setShowLoading(false);
  };

  const onGetUserFail = error => {
    destroy(AUTH_TOKEN);

    dispatch(postAlert(ACCOUNT_ERROR, 'error'));

    return router.push('/login');
  };

  const [getUser, { client, error }] = useLazyQuery(GET_OWN_USER, {
    onCompleted: onGetUserSuccess,
    onError: onGetUserFail,
  });

  // TODO figure out why on getUserFail is not firing
  useEffect(() => {
    if (error) onGetUserFail();
  }, [error]);

  useEffect(() => {
    const token = getCookie(AUTH_TOKEN);

    if (protection === 'onlyAuth' && !token) router.push('/login');

    if (protection === 'onlyNoAuth' && token) router.push('/');

    const fetchUser = protection === 'onlyAuth' && !user?.authenticated;

    if (fetchUser) getUser();

    // If user has logged out then reset the Apollo store
    return () => !hasAuth && client?.resetStore();
  }, [hasAuth]);

  return { user, userLoading: showLoading };
};

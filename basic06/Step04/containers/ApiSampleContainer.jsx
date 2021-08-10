import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiSample from '../components/ApiSample';
import { getPost, getUsers } from '../modules/apiSample';

const ApiSampleContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers(1));
  }, [getPost, getUsers]);

  const post = useSelector((state) => state.apiSample.post);
  const users = useSelector((state) => state.apiSample.users);
  const loadingPost = useSelector(
    (state) => state.loading['apiSample/GET_POST']
  );
  const loadingUsers = useSelector(
    (state) => state.loading['apiSample/GET_USERS']
  );

  return (
    <ApiSample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default ApiSampleContainer;

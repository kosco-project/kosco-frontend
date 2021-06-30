import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import A1Form from '../../components/doc/A1/A1Form';
import { initialize } from '../../redux/modules/docsInput';
import useGetFetch from '../../hooks/useGetFetch';
import A1_INIT from '../../docsInitialState/A1';

const A1Container = () => {
  const dispatch = useDispatch();

  const state = useGetFetch(A1_INIT);

  useEffect(() => {
    dispatch(initialize(state));
  }, [dispatch, state]);

  return <A1Form />;
};

export default A1Container;

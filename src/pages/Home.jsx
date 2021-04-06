import React, { useEffect } from 'react';
import AppWrapper from '../components/common/AppWrapper';
import Header from '../components/common/Header';
import CategoryListContainer from '../containers/CategoryListContainer';

const Home = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <CategoryListContainer />
    </AppWrapper>
  );
};

export default Home;

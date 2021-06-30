import axios from 'axios';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const usePostFetch = (form = null) => {
  const state = useSelector(state => state.docsInput);
  const location = useLocation();

  const path = location.pathname.split('/')[2];

  const postFetch = useCallback(async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${path}/inspection/${form}`,
        state,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );
      console.log(res);
    } catch (e) {
      if (e.response.status === 401 || e.response.status === 409) {
        sessionStorage.removeItem('startDate');
        sessionStorage.removeItem('endDate');
        sessionStorage.removeItem('KOSCO_token');
        window.location.replace('/');
      }
      console.log(e);
    }
  }, [form, path, state]);

  return [postFetch];
};

export default usePostFetch;

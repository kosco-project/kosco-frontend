import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useGetFetch = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const location = useLocation();

  const path = location.pathname.split('/')[2];
  const CERTNO = JSON.parse(localStorage.getItem('certNo'));
  const RCVNO = JSON.parse(localStorage.getItem('rcvNo'));
  const VESSELNM = JSON.parse(localStorage.getItem('shipNm')) || '';

  const getFetch = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${path}?ct=${CERTNO}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );

      const { D1, ...rest } = await res.data;

      await setState(() => ({
        H: {
          CERTNO,
          RCVNO,
          VESSELNM,
        },
        D1,
        ...rest,
      }));
    } catch (e) {
      console.log(e);
      if (e.response.status === 401 || e.response.status === 409) {
        sessionStorage.removeItem('startDate');
        sessionStorage.removeItem('endDate');
        sessionStorage.removeItem('KOSCO_token');
        window.location.replace('/');
      }
    }
  }, [CERTNO, RCVNO, VESSELNM, path]);

  useEffect(() => {
    getFetch();
  }, [getFetch]);

  return state;
};
export default useGetFetch;

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const useGetFetch = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const CERTNO = JSON.parse(localStorage.getItem('certNo'));
  const RCVNO = JSON.parse(localStorage.getItem('rcvNo')) || '';
  const VESSELNM = JSON.parse(localStorage.getItem('shipNm')) || '';

  const H = { CERTNO, RCVNO, VESSELNM };
  initialState.H = H;

  const history = useHistory();
  const location = useLocation();

  const path = location.pathname.split('/')[2];

  const getFetch = useCallback(async () => {
    if (!CERTNO) return setState(initialState);

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
        history.push('/');
      }
    }
  }, [CERTNO, RCVNO, VESSELNM, initialState, path]);

  useEffect(() => {
    getFetch();
  }, [getFetch]);

  return state;
};
export default useGetFetch;

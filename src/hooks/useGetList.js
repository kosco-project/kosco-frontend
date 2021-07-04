import axios from 'axios';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useGetList = (start, end, processValue) => {
  const history = useHistory();

  const [list, setList] = useState();

  const getList = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/inspectionList/${start.format(
          'YYYY-MM-DD'
        )}/${end.format('YYYY-MM-DD')}/${processValue}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );

      await setList(() => res.data.list_info);
    } catch (e) {
      console.log(e);
      if (
        e.response &&
        (e.response.status === 401 || e.response.status === 409)
      ) {
        sessionStorage.removeItem('startDate');
        sessionStorage.removeItem('endDate');
        sessionStorage.removeItem('KOSCO_token');
        history.push('/');
      }
    }
  }, [end, history, processValue, start]);

  useEffect(() => {
    getList();
  }, [getList]);

  return list;
};

export default useGetList;

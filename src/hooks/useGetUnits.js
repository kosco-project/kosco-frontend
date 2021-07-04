import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

const useGetUnits = () => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUnits = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/inspectionList/units`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );

      await setUnits(() => res.data.units);
    } catch (e) {
      if (e.response.status === 401 || e.response.status === 409) {
        sessionStorage.removeItem('startDate');
        sessionStorage.removeItem('endDate');
        sessionStorage.removeItem('KOSCO_token');
        window.location.replace('/');
      }
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUnits();
  }, [getUnits]);

  return { units, loading };
};

export default useGetUnits;

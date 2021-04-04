import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import InspectionBox from "../components/inspection/InspectionBox";


const InspectionContainer = () => {
  const [inputValue, setInputValue] = useState({
    startDate:moment(),
    endDate: moment().add(1, 'M'),
    process: null,
  });
  const [list, setList] = useState([]);

  const onChangeDate = useCallback((_, datas) => {
    setInputValue(prevValue => ({
      ...prevValue,
      startDate: moment(datas[0]),
      endDate: moment(datas[1]),
    }));
    sessionStorage.setItem('startDate', moment(datas[0]).format('YYYY-MM-DD'));
    sessionStorage.setItem('endDate', moment(datas[1]).format('YYYY-MM-DD'));
  }, []);

  const onChangeProcess = useCallback(e => {
    setInputValue(prevValue => ({
      ...prevValue,
      process: e.target.value,
    }));
  }, []);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/inspectionList/${inputValue.startDate.format('YYYY-MM-DD')}/${inputValue.endDate.format('YYYY-MM-DD')}/${inputValue.process}`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
        }
      );
      setList(res.data.list);
    })();
  }, [inputValue.endDate, inputValue.process, inputValue.startDate]);
  
  useEffect(() => {
    setInputValue({
      startDate: sessionStorage.getItem('startDate')
      ? moment(sessionStorage.getItem('startDate'))
      : moment(),
      endDate: sessionStorage.getItem('endDate')
      ? moment(sessionStorage.getItem('endDate'))
        : moment().add(1, 'M'),
      process: sessionStorage.getItem('process') ? +sessionStorage.getItem('process') : 1,
    })
  }, [])
  return (
    <InspectionBox
      list={list}
      onChangeDate={onChangeDate}
      onChangeProcess={onChangeProcess}
      inputValue={inputValue} />
  )
}

export default InspectionContainer;
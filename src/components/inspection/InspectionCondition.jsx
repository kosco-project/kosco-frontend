import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DatePicker, Radio } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getInspectionList } from '../../redux/modules/inspectionList';
import useGetList from '../../hooks/useGetList';

const { RangePicker } = DatePicker;

const InspectionForm = styled.form`
  height: 100px;

  > .inspection-input-box {
    margin-bottom: 10px;

    > label {
      display: inline-block;
      width: 50px;
    }
  }
`;

const InspectionCondition = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [start, setStart] = useState(sessionStorage.getItem('startDate') ? moment(sessionStorage.getItem('startDate')) : moment());
  const [end, setEnd] = useState(sessionStorage.getItem('endDate') ? moment(sessionStorage.getItem('endDate')) : moment().add(1, 'M'));
  const [process, setProcess] = useState(1);
  
  const list = useGetList(start, end, process);
  

  const onChangeD = (_, [start, end]) => {
    setStart(moment(start));
    setEnd(moment(end));
    history.push(`/inspectionList/${start}/${end}/${process}`);
    sessionStorage.setItem('startDate', start);
    sessionStorage.setItem('endDate', end);
  };

  const onChangeProcess = ({ target }) => {
    setProcess(target.value);
    history.push(`/inspectionList/${start.format('YYYY-MM-DD')}/${end.format('YYYY-MM-DD')}/${process}`);
  };

  useEffect(() => {
    if (list) dispatch(getInspectionList(list))
  }, [dispatch, list]);

  return (
    <InspectionForm>
      <div className='inspection-input-box'>
        <label htmlFor='DateRange'>날짜 :</label>
        <RangePicker size='large' onChange={onChangeD} value={[start, end]} format={'YYYY-MM-DD'} allowClear={false} />
      </div>
      <div className='inspection-input-box'>
        <label htmlFor='DateRange'>진행 :</label>
        <Radio.Group value={process} size='large' onChange={onChangeProcess}>
          <Radio.Button value={1}>전체</Radio.Button>
          <Radio.Button value={2}>진행</Radio.Button>
          <Radio.Button value={3}>완료</Radio.Button>
        </Radio.Group>
      </div>
    </InspectionForm>
  );
};

export default memo(InspectionCondition);

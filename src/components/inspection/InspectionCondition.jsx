import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { DatePicker, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { getInspectionList } from '../../redux/modules/inspectionList';
import useGetList from '../../hooks/useGetList';
import useSearchCondition from '../../hooks/useSearchCondition';

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
  .ant-radio-button-wrapper:hover {
    border-color: #605C72;
    color: #605C72;
  }
  .ant-radio-button-wrapper-checked {
    border-color: #605C72;
    color: #fff;
  }

  .ant-radio-button-wrapper-checked:hover {
    border-color: #605C72;
    color: #fff;
  }

  .ant-radio-button-checked{
    border-color: #605C72;
    background-color: #605C72;
    color: #fff;
  }
`;

const InspectionCondition = () => {
  const dispatch = useDispatch();
  const { start, end, process, onChangeDate, onChangeProcess } = useSearchCondition();
  
  const list = useGetList(start, end, process);


  useEffect(() => {
    if (list) dispatch(getInspectionList(list));
    
  }, [dispatch, list]);

  return (
    <InspectionForm>
      <div className='inspection-input-box'>
        <label htmlFor='DateRange'>날짜 :</label>
        <RangePicker size='large' onChange={onChangeDate} value={[start, end]} format={'YYYY-MM-DD'} allowClear={false} />
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

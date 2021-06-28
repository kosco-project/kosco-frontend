import React, { memo } from 'react';
import styled from 'styled-components';
import InspectionCondition from './InspectionCondition';
import InspectionList from './InspectionList';
import InspectionTitleBox from './InspectionTitleBox';
import InputSearch from '../common/InputSearch';

const ConditionWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 0 20px;
`;

const InspectionBox = ({   onChangeDate, onChangeProcess, inputValue }) => {

  return (
    <>
    <ConditionWrapper>
      <InspectionCondition  inputValue={inputValue} onChangeDate={onChangeDate} onChangeProcess={onChangeProcess} />
      <InputSearch />
    </ConditionWrapper>
    <div>
      <InspectionTitleBox />
      <InspectionList inputValue={inputValue} />
    </div>
    </>
  );
};

export default memo(InspectionBox);

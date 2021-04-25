import React, { memo } from 'react';
import InspectionCondition from './InspectionCondition';
import InspectionList from './InspectionList';
import InspectionTitleBox from './InspectionTitleBox';

const InspectionBox = ({ list, onChangeDate, onChangeProcess, inputValue }) => {

  return (
    <div>
      <InspectionCondition inputValue={inputValue} onChangeDate={onChangeDate} onChangeProcess={onChangeProcess} />
      <InspectionTitleBox />
      <InspectionList inputValue={inputValue} list={list}/>
    </div>
  );
};

export default memo(InspectionBox);

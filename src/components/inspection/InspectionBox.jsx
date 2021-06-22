import React, { memo } from 'react';
import InspectionCondition from './InspectionCondition';
import InspectionList from './InspectionList';
import InspectionTitleBox from './InspectionTitleBox';

const InspectionBox = ({ list, pageList, onChangeDate, onChangeProcess, inputValue, onChangePage }) => {

  return (
    <div>
      <InspectionCondition inputValue={inputValue} onChangeDate={onChangeDate} onChangeProcess={onChangeProcess} />
      <InspectionTitleBox />
      <InspectionList inputValue={inputValue} list={list} pageList={pageList} onChangePage={onChangePage} />
    </div>
  );
};

export default memo(InspectionBox);

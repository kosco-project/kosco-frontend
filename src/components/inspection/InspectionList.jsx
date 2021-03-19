import React, { memo } from 'react';
import styled from 'styled-components';
import { Empty } from 'antd';
import InpectionItem from './InpectionItem';

require('dotenv').config();

const Listbox = styled.div`
  padding: 20px 0;
`;

const InspectionList = ({ list }) => {
  
  console.log('list', list);
  return (
    <Listbox >
      {list.length === 0 && <Empty />}
      {list.length > 0 && list.map((item, i) => <InpectionItem key={i} item={item}/>)}
    </Listbox>
  );
};

export default memo(InspectionList);

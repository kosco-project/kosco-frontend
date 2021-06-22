import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Empty } from 'antd';
import Pagination from 'rc-pagination';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import InpectionItem from './InpectionItem';

require('dotenv').config();

const Listbox = styled.div`
  padding: 20px 0;
  min-height: 500px;
`;

const ListContainer = styled.div`
  text-align: center;

  .rc-pagination {
    display: inline-block;
    margin-bottom: 50px;
  }

  .rc-pagination > li {
    float: left;
    line-height: 30px;
    list-style: none;
    text-align: center;
    padding: 4px 10px;
    margin: 0 5px;
    cursor: pointer;
  }

  .rc-pagination-item-active > a {
    color: #fff;
    display: inline-block;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid #605C72;
    background-color: #605C72;
  }

  .rc-pagination-item > a:hover {
    color: #5E5B71;
  }

  .rc-pagination-item-active > a:hover {
    color: #fff;
  }
`;

const InspectionList = ({ list, pageList, onChangePage }) => {
  return (
    <ListContainer>
    <Listbox >
      {pageList.length === 0 && <Empty />}
      {pageList.length > 0 && pageList.map((item, i) => <InpectionItem key={i} item={item}/>)}
    </Listbox>
      {
        pageList.length > 0 &&
        <Pagination
          total={list.length}
          pageSize={10}
          prevIcon={<IoIosArrowBack />}
          nextIcon={<IoIosArrowForward />}
          jumpPrevIcon={"..."}
          jumpNextIcon={"..."}
          onChange={page => onChangePage(page)}
        />
      }
   
      </ListContainer>
  );
};

export default memo(InspectionList);

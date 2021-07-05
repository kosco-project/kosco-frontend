import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Empty } from 'antd';
import Pagination from 'rc-pagination';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import InpectionItem from './InpectionItem';

require('dotenv').config();

const Listbox = styled.div`
  padding: 20px 0;
  min-height: 800px;
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

const InspectionList = () => {
  const history = useHistory();
  const location = useLocation();
  const list = useSelector(state => state.inspectionList.list);
  const total_pages = useSelector(state => state.inspectionList.total_pages);

  const [limit, setLimit] = useState(1);

  const slice_list = list.slice(10 * (limit - 1), 10 * limit);

  const onChangePage = useCallback(
    page => {
      history.push({ search: '?page=' + page });
    },
    [history]
  );

  useEffect(() => {
    setLimit(+location.search.split('?page=')[1] || 1);
  }, [location.search]);

  return (
    <ListContainer>
    <Listbox >
      {list.length === 0 && <Empty />}
      {list.length > 0 && slice_list.map((item, i) => <InpectionItem key={i} item={item}/>)}
    </Listbox>
      {
        list.length > 0 &&
        <Pagination
          total={total_pages}
          current={limit}
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

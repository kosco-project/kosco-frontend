import React, { useCallback, useState } from 'react';
import { Select, Input } from 'antd';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';
import { getInspectionList } from '../../redux/modules/inspectionList';
import useGetList from '../../hooks/useGetList';
import useSearchCondition from '../../hooks/useSearchCondition';

const { Option } = Select;
const { Search } = Input;

const SelectWrapper = styled(Select)`
  width: 120px;
`;

const SearchWrapper = styled(Search)`
  width: 200px;
`;

const Form = styled.form`
  margin-top: 55px;
`;

const InputSearch = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { start, end, processValue } = useSearchCondition();
  
  const list = useGetList(start, end, processValue);
  
  const [schType, setSearchType] = useState(qs.parse(location.search)['sch-type'] || 'CUSTNM');
  const [schKeyword, setSchKeyword] = useState('');

  const handleChange = useCallback(name => {
    setSearchType(name);
  }, []);

  const onSearch = async value => {
    try {
      const res = await axios.get(
        `${
          process.env.REACT_APP_SERVER_URL
        }/api/inspectionList/${sessionStorage.getItem('startDate')}/${sessionStorage.getItem('endDate')}/${sessionStorage.getItem('process') || 1}?sch_type=${schType}&sch_keyword=${value}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );

      await dispatch(getInspectionList(res.data.list_info));
      await history.push({ search: location.search.split('&')[0] + `&sch-type=${schType}&sch-keyword=${schKeyword}`})
    } catch (e) {
      console.log(e);
    }

  };

  const onChange = ({ target }) => {
    setSchKeyword(target.value);
    if (target.value === '') dispatch(getInspectionList(list));
  };

  return (
    <Form>
    <SelectWrapper value={schType} onChange={handleChange}>
      <Option value="CUSTNM">고객명</Option>
      <Option value="RCVDT">수주일자</Option>
      <Option value="SHIPNM">선박명</Option>
      <Option value="RCVNO">수주번호</Option>
      <Option value="DOC_NO">양식번호</Option>
      <Option value="CERT_NO">서트관리번호</Option>
    </SelectWrapper>
     <SearchWrapper value={schKeyword} placeholder="검색어를 입력해주세요" onChange={onChange} onSearch={onSearch} />
    </Form>
  );
};

export default InputSearch;

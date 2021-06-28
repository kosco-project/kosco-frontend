import React, { useCallback, useState } from 'react';
import { Select, Input } from 'antd';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getInspectionList } from '../../redux/modules/inspectionList';

const { Option } = Select;
const { Search } = Input;

const SelectWrapper = styled(Select)`
  width: 120px;
`;

const SearchWrapper = styled(Search)`
  width: 230px;
`;

const Form = styled.form`
  margin-top: 55px;
`;

const InputSearch = () => {
  const dispatch = useDispatch();

  const [searchType, setSearchType] = useState('CUSTNM');

  const handleChange = useCallback(name => {
    setSearchType(name);
  }, []);

  const onSearch = async value => {
    try {
      const res = await axios.get(
        `${
          process.env.REACT_APP_SERVER_URL
        }/api/inspectionList/${sessionStorage.getItem('startDate')}/${sessionStorage.getItem('endDate')}/${sessionStorage.getItem('process') || 1}?sch_type=${searchType}&sch_keyword=${value}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );

      dispatch(getInspectionList(res.data.list_info))
    } catch (e) {
      console.log(e.res);
      console.log(e);
    }

  };

  return (
    <Form>
    <SelectWrapper defaultValue="CUSTNM" onChange={handleChange}>
      <Option value="CUSTNM">고객명</Option>
      <Option value="RCVDT">수주일자</Option>
      <Option value="SHIPNM">선박명</Option>
      <Option value="RCVNO">수주번호</Option>
      <Option value="DOC_NO">양식번호</Option>
      <Option value="CERT_NO">서트관리번호</Option>
    </SelectWrapper>
     <SearchWrapper placeholder="검색어를 입력해주세요" allowClear onSearch={onSearch} />
    </Form>
  );
};

export default InputSearch;

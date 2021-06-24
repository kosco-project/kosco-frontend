import React, { useState } from 'react';
import { Select, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import styled from 'styled-components';

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

const InputSearch = ({list, setList}) => {
  const [searchType, setSearchType] = useState('custNm');

  const handleChange = name => {
    setSearchType(name);
  };

  const onSearch = value => {
    console.log(value);
  };

  const onchange = ({target}) => {
    console.log(target.value);
  }
  return (
    <Form>
    <SelectWrapper defaultValue="custNm" onChange={handleChange}>
      <Option value="custNm">고객명</Option>
      <Option value="rcvDt">수주일자</Option>
      <Option value="shipNm">선박명</Option>
      <Option value="rcvNo">수주번호</Option>
      <Option value="docNo">양식번호</Option>
      <Option value="certNo">서트관리번호</Option>
    </SelectWrapper>
     <SearchWrapper placeholder="검색어를 입력해주세요" allowClear onChange={onchange} onSearch={onSearch} />
    </Form>
  );
};

export default InputSearch;

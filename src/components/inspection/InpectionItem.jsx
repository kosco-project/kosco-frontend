import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ItemBox = styled(Link)`
  display: flex;
  margin-bottom: 10px;
  padding: 20px 0;
  border: 1px solid #dddddd;
  border-radius: 12px;
  box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06), 0 5px 16px -1px rgba(8, 11, 14, 0.1);

  > p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    text-align: center;
    font-size: 11px;
  }
`;

const InpectionItem = ({ item }) => {
  const { CUSTNM, RCVDT, SHIPNM, RCVNO, DOC_NO, DOC_NM, CERT_NO } = item;

  
  const onClick = useCallback(() => {
    localStorage.setItem('rcvNo', JSON.stringify(RCVNO));
    localStorage.setItem('certNo', JSON.stringify(CERT_NO));
    localStorage.setItem('shipNm', JSON.stringify(SHIPNM));
  }, [CERT_NO, RCVNO, SHIPNM]);
  

  useEffect(() => {
    return (
      localStorage.removeItem('rcvNo'),
      localStorage.removeItem('certNo'),
      localStorage.removeItem('shipNm')
    )
  })


  return (
    // 나중에 `/doc/${DOC_NO}` 이걸로 꼭 수정하기
    // 확인하기 위한 쿼리임
    <ItemBox to={`${CERT_NO ? `/doc/${DOC_NO}`: `/doc/${DOC_NO}?ct=${CERT_NO}`}`} item={item} onClick={onClick}>
      <p>{CUSTNM || ' '}</p>
      <p>{RCVDT || ' '}</p>
      <p>{SHIPNM || ' '}</p>
      <p>{RCVNO || ' '}</p>
      <p>{DOC_NO || ' '}</p>
      <p>{DOC_NM || ' '}</p>
      <p>{CERT_NO || ' '}</p>
    </ItemBox>
  );
};

export default InpectionItem;

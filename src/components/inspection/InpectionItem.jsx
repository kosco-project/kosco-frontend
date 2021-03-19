import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getVesselInfo } from '../../redux/modules/inspection';

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
  const dispatch = useDispatch();

  const onClick = useCallback(() => (
    dispatch(getVesselInfo(item))
  ), [dispatch, item]);
  
  return (
    <ItemBox to={`/doc/${item.DOC_NO}`} onClick={() => onClick(item)}>
      <p>{item.CUSTNM || ' '}</p>
      <p>{item.RCVDT || ' '}</p>
      <p>{item.SHIPNM || ' '}</p>
      <p>{item.RCVNO || ' '}</p>
      <p>{item.DOC_NO || ' '}</p>
      <p>{item.DOC_NM || ' '}</p>
      <p>{item.CERT_NO || ' '}</p>
    </ItemBox>
  );
};

export default InpectionItem;

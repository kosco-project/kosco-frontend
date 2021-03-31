import React from 'react';
import styled from 'styled-components';


const Button = styled.button `
    width: 87px;
    height: 32px;
    border-color: #1890ff;
    background: #1890ff;
    font-size: 14px;
    border-style: none;
    color: #fff;
`;

const InspectionCompleteButton = ({ temporaryStorage, form, path }) => {
  return (
      <Button type='submit' onClick={e => temporaryStorage(e, form, path)}>검사 완료</Button>
  );
};

export default InspectionCompleteButton;

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 87px;
    height: 32px;
    border-color: #ff4d4f;
    background: #ff4d4f;
    font-size: 14px;
    border-style: none;
    color: #fff;
`;

const TemporaryStorageButton = ({ temporaryStorage, form, path }) => {
  return (
      <Button type='submit' onClick={e => temporaryStorage(e, form, path)}>임시 저장</Button>
  );
};

export default TemporaryStorageButton;



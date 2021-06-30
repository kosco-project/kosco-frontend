import React from 'react';
import styled from 'styled-components';
import useModal from '../../../hooks/useModal';
import FetchModal from '../../common/FetchModal';

const Button = styled.button`
    width: 87px;
    height: 32px;
    border-color: #ff4d4f;
    background: #ff4d4f;
    font-size: 14px;
    border-style: none;
    color: #fff;
`;

const TemporaryStorageButton = () => {
  const [fetchModal, setFetchModal] = useModal()
  
  return (
    <>
      <Button type='button' onClick={() => setFetchModal(true)}>임시 저장</Button>
      <FetchModal setFetchModal={setFetchModal} isActive={fetchModal} form="save">
          임시저장
      </FetchModal>
    </>
  );
};

export default TemporaryStorageButton;



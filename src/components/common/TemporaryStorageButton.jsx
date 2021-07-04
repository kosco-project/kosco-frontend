import React from 'react';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import FetchModal from './FetchModal';

const Button = styled.button`
    margin-right: 50px !important;
    margin-top: 30px !important;
    width: 150px;
    height: 45px;
    border-color: #ff4d4f;
    /* border-radius: 2px; */
    background: #ff4d4f;
    font-size: 18px;
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




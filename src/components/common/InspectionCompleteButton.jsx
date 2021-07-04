import React from 'react';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import FetchModal from './FetchModal';


const Button = styled.button `
    margin-top: 30px !important;
    width: 150px;
    height: 45px;
    border-color: #363347;
    /* border-radius: 2px; */
    /* margin-left: 10px; */
    background: #363347;
    font-size: 18px;
    border-style: none;
    color: #fff;
`;

const InspectionCompleteButton = () => {
  const [completeModal, setCompleteModal] = useModal();
  
  return (
    <>
      <Button type='button' onClick={() => setCompleteModal(true)}>검사 완료</Button>
      <FetchModal setFetchModal={setCompleteModal} isActive={completeModal} form="complete">
          검사완료
      </FetchModal>
    </>
  );
};

export default InspectionCompleteButton;


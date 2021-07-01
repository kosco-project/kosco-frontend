import React from 'react';
import styled from 'styled-components';
import useModal from '../../../hooks/useModal';
import FetchModal from '../../common/FetchModal';


const Button = styled.button `
    margin-top: 30px !important;
    width: 150px;
    height: 45px;
    border-color: #292f4c;
    border-radius: 5px;
    /* margin-left: 10px; */
    background: #292f4c;
    font-size: 14px;
    border-style: none;
    color: #fff;
`;

const InspectionCompleteButton = () => {
  const [completeModal, setCompleteModal] = useModal();
  return (
    <>
      <Button type='button' onClick={() => setCompleteModal(true)}>검사 완료</Button>
      <FetchModal setFetchModal={setCompleteModal} isActive={completeModal}>
          검사완료
      </FetchModal>
    </>
  );
};

export default InspectionCompleteButton;


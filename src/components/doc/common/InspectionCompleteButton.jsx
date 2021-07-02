import React from 'react';
import styled from 'styled-components';
import useModal from '../../../hooks/useModal';
import FetchModal from '../../common/FetchModal';


const Button = styled.button `
    width: 87px;
    height: 32px;
    border-color: #1890ff;
    background: #1890ff;
    font-size: 14px;
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

import React from 'react';
import styled from 'styled-components';
import { GoX } from 'react-icons/go'; 


const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
`;

const OX2TopTableRow = ({ id, onRemove }) => {
  return (
    <div>
      <div className='title'>
        <input type='text' style={{ width: '100%' }} />
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' />
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' />
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' />
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' />
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' />
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' />
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' />
      </div>
      <div>
       <DeleteButton type="button" onClick={() => onRemove(id)}>
          <GoX fill="#e92a2a" size="18px"/>
        </DeleteButton>
      </div>
    </div>
  );
};

export default OX2TopTableRow;

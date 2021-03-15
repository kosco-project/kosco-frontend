import React from 'react';
import { GoX } from 'react-icons/go'; 
import styled from 'styled-components';

const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
`;

const H31TopTableRow = ({ id, onRemove, num }) => {
  return (
    <div>
      <div className='title'>
      {'SET NO.' + num}
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

export default H31TopTableRow;

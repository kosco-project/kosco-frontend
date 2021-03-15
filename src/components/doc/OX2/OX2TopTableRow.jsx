import React from 'react';
import DeleteButton from '../common/DeleteButton';

const OX2TopTableRow = ({ id, onRemove, num }) => {
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
      <div className='description' onClick={() => onRemove(id)}> 
        <DeleteButton />
      </div>
    </div>
  );
};

export default OX2TopTableRow;

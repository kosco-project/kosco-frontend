import React from 'react';
import DeleteButton from '../common/DeleteButton';

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
      <div className='description' onClick={() => onRemove(id)}>
       <DeleteButton />
      </div>
    </div>
  );
};

export default H31TopTableRow;

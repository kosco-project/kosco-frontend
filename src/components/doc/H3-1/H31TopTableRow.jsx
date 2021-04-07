import React from 'react';
import DeleteButton from '../common/DeleteButton';

const H31TopTableRow = ({ id, onRemove, onChangeD1, num }) => {
  const checkBoxArgument = ({ target }) => onChangeD1({ target, id })
  return (
    <div>
      <div className='title'>
        <div style={{ width: '100%'}}>
          {`Set No.` + num}
        </div>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="ins2"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="ins3"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="ins4"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="ins5"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="ins6"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="ins7"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="ins8"/>
      </div>
      <div className='description' onClick={() => onRemove(id)}>
        <DeleteButton />
      </div>
    </div>
  );
};

export default H31TopTableRow;

import React from 'react';
import DeleteButton from '../common/DeleteButton';

const OX2TopTableRow = ({ id, onRemove, onChangeD1, num }) => {
  const checkBoxArgument = ({ target }) => onChangeD1({ target, id })
  return (
    <div>
      <div className='title'>
         {'SET NO.' + num}
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="SetNo1"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="SetNo2"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="SetNo3"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="SetNo4"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="SetNo5"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="SetNo6"/>
      </div>
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="SetNo7"/>
      </div>
      <div className='description' onClick={() => onRemove(id)}> 
        <DeleteButton />
      </div>
    </div>
  );
};

export default OX2TopTableRow;

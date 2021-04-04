import React from 'react';
import DeleteButton from '../common/DeleteButton';

const H3TopTableRow = ({ id, onRemove, onChangeD1, num }) => {
  const checkBoxArgument = ({ target }) => onChangeD1({ target, id })
  return (
    <div>
      <div className='title'>
        <div style={{ width: '100%'}}>
          {`Set No.` + num}
        </div>
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
      <div className='description'>
        <input type='checkbox' defaultChecked='checked' onChange={checkBoxArgument} name="SetNo8"/>
      </div>
      <div className='description' onClick={() => onRemove(id)}>
        <DeleteButton />
      </div>
    </div>
  );
};

export default H3TopTableRow;

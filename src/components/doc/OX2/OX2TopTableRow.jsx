import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const OX2TopTableRow = ({ id, onRemove, onChangeD1, num }) => {
  const { SetNo1, SetNo2, SetNo3, SetNo4, SetNo5, SetNo6, SetNo7 } = useSelector(state => state.ox2.D1[id]);

  const checkBoxArgument = ({ target }) => onChangeD1({ target, id })
  return (
    <div>
      <div className='title'>
         {'SET NO.' + num}
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo1} onChange={checkBoxArgument} name="SetNo1"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo2} onChange={checkBoxArgument} name="SetNo2"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo3} onChange={checkBoxArgument} name="SetNo3"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo4} onChange={checkBoxArgument} name="SetNo4"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo5} onChange={checkBoxArgument} name="SetNo5"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo6} onChange={checkBoxArgument} name="SetNo6"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo7} onChange={checkBoxArgument} name="SetNo7"/>
      </div>
      <div className='description' onClick={() => onRemove(id)}> 
        <DeleteButton />
      </div>
    </div>
  );
};

export default OX2TopTableRow;

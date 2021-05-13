import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const H31TopTableRow = ({ id, onRemove, onChangeD1, num }) => {
  const { ins1, ins2, ins3, ins4, ins5, ins6, ins7 } = useSelector(state => state.h1h3h31.D1[id]);

  const checkBoxArgument = ({ target }) => onChangeD1({ target, id })
  return (
    <div>
      <div className='title'>
        <div style={{ width: '100%'}}>
          {`Set No.` + num}
        </div>
      </div>
      <div className='description'>
        <input type='checkbox' checked={!!ins1} onChange={checkBoxArgument} name="ins1"/>
      </div>
      <div className='description'>
        <input type='checkbox' checked={!!ins2} onChange={checkBoxArgument} name="ins2"/>
      </div>
      <div className='description'>
        <input type='checkbox' checked={!!ins3} onChange={checkBoxArgument} name="ins3"/>
      </div>
      <div className='description'>
        <input type='checkbox' checked={!!ins4} onChange={checkBoxArgument} name="ins4"/>
      </div>
      <div className='description'>
        <input type='checkbox' checked={!!ins5} onChange={checkBoxArgument} name="ins5"/>
      </div>
      <div className='description'>
        <input type='checkbox' checked={!!ins6} onChange={checkBoxArgument} name="ins6"/>
      </div>
      <div className='description'>
        <input type='checkbox' checked={!!ins7} onChange={checkBoxArgument} name="ins7"/>
      </div>
      <div className='description' onClick={() => onRemove(id)}>
        <DeleteButton />
      </div>
    </div>
  );
};

export default H31TopTableRow;

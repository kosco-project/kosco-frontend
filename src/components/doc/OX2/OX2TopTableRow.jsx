import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useChangeCheckbox from '../../../hooks/useChangeCheckbox';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const OX2TopTableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const { SetNo1, SetNo2, SetNo3, SetNo4, SetNo5, SetNo6, SetNo7 } = useSelector(state => state.ox2.D1[id]);

  const onChange = useChangeCheckbox;

  return (
    <div>
      <div className='title'>
         {'SET NO.' + num}
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo1} onChange={onChange} name="SetNo1"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo2} onChange={onChange} name="SetNo2"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo3} onChange={onChange} name="SetNo3"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo4} onChange={onChange} name="SetNo4"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo5} onChange={onChange} name="SetNo5"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo6} onChange={onChange} name="SetNo6"/>
      </div>
      <div className='description'>
        <input type='checkbox'checked={!!SetNo7} onChange={onChange} name="SetNo7"/>
      </div>
      <div className='description' onClick={() => dispatch(deleteList({ form: 'D1', id }))}> 
        <DeleteButton />
      </div>
    </div>
  );
};

export default OX2TopTableRow;

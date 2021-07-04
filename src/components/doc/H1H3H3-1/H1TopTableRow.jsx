import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useChangeCheckbox from '../../../hooks/useChangeCheckbox';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const H1TopTableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const { ins1, ins2, ins3, ins4, ins5, ins6, ins7 } = useSelector(state => state.docsInput.D1[id]);
  
  const onChange = useChangeCheckbox();
  
  return (
    <div>
      <div className='title'>
        {'SET NO.' + num}
      </div>
      <div className='description'>
        <input type='checkbox' data-form="D1" data-key={id} checked={!!ins1} onChange={onChange} name="ins1"/>
      </div>
      <div className='description'>
        <input type='checkbox' data-form="D1" data-key={id} checked={!!ins2} onChange={onChange} name="ins2"/>
      </div>
      <div className='description'>
        <input type='checkbox' data-form="D1" data-key={id} checked={!!ins3} onChange={onChange} name="ins3"/>
      </div>
      <div className='description'>
        <input type='checkbox' data-form="D1" data-key={id} checked={!!ins4} onChange={onChange} name="ins4"/>
      </div>
      <div className='description'>
        <input type='checkbox' data-form="D1" data-key={id} checked={!!ins5} onChange={onChange} name="ins5"/>
      </div>
      <div className='description'>
        <input type='checkbox' data-form="D1" data-key={id} checked={!!ins6} onChange={onChange} name="ins6"/>
      </div>
      <div className='description'>
        <input type='checkbox' data-form="D1" data-key={id} checked={!!ins7} onChange={onChange} name="ins7"/>
      </div>
      <div className='description' onClick={() => dispatch(deleteList({ form: 'D1', id }))}>
        <DeleteButton />
      </div>
    </div>
  );
};

export default H1TopTableRow;

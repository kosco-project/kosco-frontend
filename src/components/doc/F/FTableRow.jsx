import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../common/DeleteButton';

const FTableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const { s_no, position, condition, remark } = useSelector(state => state.docsInput.D1[id]);

  const onChangeText = useChangeD1();

  return (
        <tr>
        <td>{num}</td>
        <td>
          <input type='text' data-name={ id } data-form="D1" data-key="s_no" value={s_no} onChange={e => onChangeText(e)} />
        </td>
        <td>
          <input type='text' data-name={ id } data-form="D1" data-key="position" value={position} onChange={e => onChangeText(e)} />
        </td>
        <td>
          <select data-name={ id } data-form="D1" data-key="condition" value={condition} onChange={e => onChangeText(e)}>
            <option value='GOOD'>GOOD</option>
            <option value='BAD'>BAD</option>
          </select>
        </td>
        <td>
          <input type='text' data-name={ id } data-form="D1" data-key="remark" value={remark} onChange={e => onChangeText(e)} />
        </td>
        <td onClick={() => dispatch(deleteList({ form: 'D1', id }))}>
          <DeleteButton />
        </td>
      </tr>
  );
};

export default FTableRow;

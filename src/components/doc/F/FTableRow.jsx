import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../common/DeleteButton';

const FTableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const { s_no, position, condition, remark } = useSelector(state => state.docsInput.D1[id]);

  const onChange = useChangeD1();

  return (
        <tr>
        <td>{num}</td>
        <td>
          <input type='text' name="s_no" data-form="D1" data-key={id} value={s_no} onChange={onChange} />
        </td>
        <td>
          <input type='text' name="position" data-form="D1" data-key={id} value={position} onChange={onChange} />
        </td>
        <td>
          <select name="condition" data-form="D1" data-key={id} value={condition} onChange={onChange}>
            <option value='GOOD'>GOOD</option>
            <option value='BAD'>BAD</option>
          </select>
        </td>
        <td>
          <input type='text' name="remark" data-form="D1" data-key={id} value={remark} onChange={onChange} />
        </td>
        <td onClick={() => dispatch(deleteList({ form: 'D1', id }))}>
          <DeleteButton />
        </td>
      </tr>
  );
};

export default FTableRow;

import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const FTableRow = ({ id, onRemove, onChange, num }) => {
  const D1 = useSelector(state => state.f.D1[id]);
  const { s_no, position, condition, remark } = D1;

  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' value={s_no} onChange={inputArg} name="s_no"/>
      </td>
      <td>
        <input type='text' value={position} onChange={inputArg} name="position"/>
      </td>
      <td>
        <select value={condition} onChange={inputArg} name="condition">
          <option value='GOOD'>GOOD</option>
          <option value='BAD'>BAD</option>
        </select>
      </td>
      <td>
        <input type='text' value={remark} onChange={inputArg} name="remark"/>
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default FTableRow;

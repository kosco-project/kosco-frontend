import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const F2TableRow = ({ id, onRemove, onChange, num }) => {
  const D1 = useSelector(state => state.f2.D1[id]);
  const { manuf, type, s_no, remark } = D1;

  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' value={manuf} onChange={inputArg} name="manuf"/>
      </td>
      <td>
        <input type='text' value={type} onChange={inputArg} name="type"/>
      </td>
      <td>
        <input type='text' value={s_no} onChange={inputArg} name="s_no"/>
      </td>
      <td>
        <select value={remark} onChange={inputArg} name="remark">
          <option value='GOOD'>GOOD</option>
          <option value='BAD'>BAD</option>
        </select>
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default F2TableRow;

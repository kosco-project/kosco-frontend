import React from 'react';
import DeleteButton from '../common/DeleteButton';

const F2TableRow = ({ id, onRemove, onChange, num }) => {
  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' onChange={inputArg} name="manuf"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="type"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="s_no"/>
      </td>
      <td>
        <select onChange={inputArg} name="remark">
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

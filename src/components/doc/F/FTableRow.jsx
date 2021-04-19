import React from 'react';
import DeleteButton from '../common/DeleteButton';

const FTableRow = ({ id, onRemove, onChange, num }) => {
  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' onChange={inputArg} name="s_no"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="position"/>
      </td>
      <td>
        <select onChange={inputArg} name="condition">
          <option value='GOOD'>GOOD</option>
          <option value='BAD'>BAD</option>
        </select>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="remark"/>
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default FTableRow;

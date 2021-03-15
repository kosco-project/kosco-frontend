import React from 'react';
import DeleteButton from '../common/DeleteButton';

const FTableRow = ({ id, onRemove, num }) => {
  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <select name='' id=''>
          <option value='GOOD'>GOOD</option>
          <option value='BAD'>BAD</option>
        </select>
      </td>
      <td>
        <input type='text' />
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default FTableRow;

import React from 'react';
import DeleteButton from '../common/DeleteButton';

const OX2BttomTableRow = ({ id, onRemove, num }) => {
  return (
    <tr>
      <td>
        {'NO.' + num}
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='date' />
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

export default OX2BttomTableRow;

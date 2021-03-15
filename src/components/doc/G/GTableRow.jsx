import React from 'react';
import DeleteButton from '../common/DeleteButton';

const GTableRow = ({ id, onRemove }) => {
  return (
    <tr>
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

export default GTableRow;

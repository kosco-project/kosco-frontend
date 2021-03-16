import React from 'react';
import DeleteButton from '../common/DeleteButton';

const ITableRow = ({ id, onRemove, num }) => {
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
        <input type='date' />
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default ITableRow;

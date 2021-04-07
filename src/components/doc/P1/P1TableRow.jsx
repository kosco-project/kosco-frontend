import React from 'react';
import DeleteButton from '../common/DeleteButton';

const P1TableRow = ({ id, onRemove, num, onChange }) => {
  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>
        <div>{num}</div>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="ProductType"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Qty"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Size"/>
      </td>
      <td>
        <select onChange={inputArg} name="Perform">
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

export default P1TableRow;

import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const P1TableRow = ({ id, onRemove, num, onChange }) => {
  const { ProductType, Qty, Size, Perform } = useSelector(state => state.p1.D1[id]);

  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>
        <div>{num}</div>
      </td>
      <td>
        <input type='text' value={ProductType} onChange={inputArg} name="ProductType"/>
      </td>
      <td>
        <input type='text' value={Qty} onChange={inputArg} name="Qty"/>
      </td>
      <td>
        <input type='text' value={Size} onChange={inputArg} name="Size"/>
      </td>
      <td>
        <select value={Perform} onChange={inputArg} name="Perform">
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

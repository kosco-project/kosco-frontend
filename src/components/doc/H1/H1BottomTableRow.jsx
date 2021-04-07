import React from 'react';
import DeleteButton from '../common/DeleteButton';

const H1BottomTableRow = ({ id, onRemoveD2, onChange, num }) => {
  const inputArg = ({ target }) => onChange({ target, id });
  return (
    <tr>
      <td>
        {'SET NO.' + num}
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Manuf" data-form="D2"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Type" data-form="D2"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="SerialNo" data-form="D2"/>
      </td>
      <td>
        <select onChange={inputArg} name="Remark" data-form="D2">
          <option value='GOOD'>GOOD</option>
          <option value='BAD'>BAD</option>
        </select>
      </td>
      <td onClick={() => onRemoveD2(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default H1BottomTableRow;

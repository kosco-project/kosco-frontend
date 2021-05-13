import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const H3BottomTableRow = ({ id, onRemoveD2, onChange, num }) => {
  const { Manuf, Type, SerialNo, Remark } = useSelector(state => state.h1h3h31.D2[id]);

  const inputArg = ({ target }) => onChange({ target, id });
  return (
    <tr>
      <td>
      {'SET NO.' + num}
      </td>
      <td>
        <input type='text' value={Manuf} onChange={inputArg} name="Manuf" data-form="D2"/>
      </td>
      <td>
        <input type='text' value={Type} onChange={inputArg} name="Type" data-form="D2"/>
      </td>
      <td>
        <input type='text' value={SerialNo} onChange={inputArg} name="SerialNo" data-form="D2"/>
      </td>
      <td>
        <select value={Remark} onChange={inputArg} name="Remark" data-form="D2">
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

export default H3BottomTableRow;

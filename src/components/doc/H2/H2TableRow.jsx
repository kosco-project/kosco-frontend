import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const H2TableRow = ({ id, onRemove, onChange }) => {
  const { TestDt } = useSelector(state => state.h2A.D1[id]);
  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>
        <input type='text' onChange={inputArg} name="CylnType"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Volume"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="WorkPress"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="SerialNo"/>
      </td>
      <td>
        <DatePicker
          selected={TestDt}
          name="TestDt"
          dateFormat="MMM.yyyy"
          onChange={value => onChange({ id, target: { name: "TestDt", value } })}
          showMonthYearPicker
        />
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

export default H2TableRow;

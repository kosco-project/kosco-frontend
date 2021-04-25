import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const TableRow = ({ id, onRemove, onChange, num }) => {
  const { TestDt } = useSelector(state => state.b1.D1[id]);
  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' onChange={inputArg} name="GasType"/>
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
        <input type='text' onChange={inputArg} name="TareWT" />
      </td>
      <td>
        <input type='text' onChange={inputArg} name="GrossWT" />
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Capacity" />
      </td>
      <td>
        <input type='text' onChange={inputArg}  name="Press" />
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Temp" />
      </td>
      <td>
        <select onChange={inputArg} name="Perform" >
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

export default TableRow;

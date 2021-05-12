import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const GTableRow = ({ id, onRemove, onChange }) => {
  const { Qty, SerialNo, Manuf, Type, Capacity, TestDt, Perform } = useSelector(state => state.g.D2[id]);
  
  const inputArg = ({ target }) => onChange({ target, id });
  return (
    <tr>
      <td>
        <input type='text' value={Qty} onChange={inputArg} name="Qty"/>
      </td>
      <td>
        <input type='text' value={SerialNo} onChange={inputArg} name="SerialNo"/>
      </td>
      <td>
        <input type='text' value={Manuf} onChange={inputArg} name="Manuf"/>
      </td>
      <td>
        <input type='text' value={Type} onChange={inputArg} name="Type"/>
      </td>
      <td>
        <input type='text' value={Capacity} onChange={inputArg} name="Capacity"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(TestDt) || new Date()}
          name="TestDt"
          dateFormat="yyyy-MM"
          onChange={value => onChange({ id, target: { name: "TestDt", value } })}
          showMonthYearPicker
        />
      </td>
      <td>
        <input type='text' value={Perform} onChange={inputArg} name="Perform"/>
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default GTableRow;

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const TableRow = ({ id, onRemove, onChange, num }) => {
  const  { TestDt }  = useSelector(state => state.b1.D1[id]);
  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' onChange={({ target }) => onChange({ target, id })} name="GasType"/>
      </td>
      <td>
        <input type='text' onChange={({ target }) => onChange({ target, id })} name="SerialNo"/>
      </td>
      <td>
        <DatePicker
          selected={TestDt}
          name="TestDt"
          dateFormat="MMM.yy"
          onChange={value => onChange({ id, target: { name: "TestDt", value } })}
          showMonthYearPicker
        />
      </td>
      <td>
        <input type='text' onChange={({ target }) => onChange({ target, id })} name="TareWT" />
      </td>
      <td>
        <input type='text' onChange={({ target }) => onChange({ target, id })} name="GrossWT" />
      </td>
      <td>
        <input type='text' onChange={({ target }) => onChange({ target, id })} name="Capacity" />
      </td>
      <td>
        <input type='text' onChange={({ target }) => onChange({ target, id })}  name="Press" />
      </td>
      <td>
        <input type='text' onChange={({ target }) => onChange({ target, id })} name="Temp" />
      </td>
      <td>
        <select onChange={({ target }) => onChange({ target, id })} name="Perform" >
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

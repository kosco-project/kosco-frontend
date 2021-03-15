import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DeleteButton from '../common/DeleteButton';


const TableRow = ({ id, onRemove, num }) => {
  const [startDate, setStartDate] = useState(new Date());
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
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="MMM.yy"
          showMonthYearPicker />
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
        <input type='text' />
      </td>
      <td>
        <select name='' id=''>
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

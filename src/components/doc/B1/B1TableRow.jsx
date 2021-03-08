import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GoX } from 'react-icons/go'; 


const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
`;


const TableRow = ({ num }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <tr className={num}>
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
         <DatePicker selected = { startDate }  onChange={date => setStartDate(date)} dateFormat="MMM.yy" showMonthYearPicker/>
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
      <td>
        <DeleteButton>
          <GoX fill="#e92a2a" size="18px"/>
        </DeleteButton>
      </td>
    </tr>
  );
};

export default TableRow;

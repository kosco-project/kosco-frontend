import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const B1TableRow = ({ id, onRemove, onChange, num }) => {
  const D1 = useSelector(state => state.b1.D1[id]);
  const { GasType, SerialNo, TestDt, TareWT, GrossWT, Capacity, Press, Temp, Perform } = D1;

  const inputArg = ({ target }) => onChange({ target, id });
  
  return (
     <tr>
      <td>{num}</td>
      <td>
        <input type='text' onChange={inputArg} value={GasType || ''} name="GasType"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} value={SerialNo || ''} name="SerialNo"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(TestDt) || new Date()}
          name="TestDt"
          dateFormat="yyyy-MM"
          onChange={date => {
            onChange({
              id,
              target: {
                name: "TestDt", value: date.getMonth() + 1 + '.' + date.getFullYear()
              }
            }
            )
          }}
          showMonthYearPicker
        />
      </td>
      <td>
        <input type='text' onChange={inputArg} value={TareWT || ''}  name="TareWT" />
      </td>
      <td>
        <input type='text' onChange={inputArg} value={GrossWT || ''}  name="GrossWT" />
      </td>
      <td>
        <input type='text' onChange={inputArg} value={Capacity || ''}  name="Capacity" />
      </td>
      <td>
        <input type='text' onChange={inputArg} value={Press || ''} name="Press" />
      </td>
      <td>
        <input type='text' onChange={inputArg} value={Temp || ''} name="Temp" />
      </td>
      <td>
        <select onChange={inputArg} value={Perform || ''} name="Perform" >
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

export default B1TableRow;

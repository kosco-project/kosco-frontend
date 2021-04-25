import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

// const GTableRow = ({ id, onRemove, units, onChange }) => {
const GTableRow = ({ id, onRemove, onChange }) => {
  const  { TestDt }  = useSelector(state => state.g.D2[id]);
  const inputArg = ({ target }) => onChange({ target, id });
  return (
    <tr>
      <td>
        <input type='text' onChange={inputArg} name="Qty"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="SerialNo"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Manuf"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Type"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Capacity"/>
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
        {/* <select onChange={inputArg} name="Perform">
          <option defaultValue="선택해주세요">선택해주세요</option>
          {units.map(unit => (
            <option key={unit.CdNm} value={unit.CD}>
              {unit.CdNm}
            </option>
          ))}
        </select> */}
        <input type='text' onChange={inputArg} name="Perform"/>
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default GTableRow;

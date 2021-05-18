import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const H4TableRow = ({ id, onRemove, onChange, units }) => {
  const  { CylnType, Volume, WorkPress, SerialNo, TestDt, Perform }  = useSelector(state => state.h2A.D1[id]);

  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>
        <input type='text' value={CylnType} onChange={inputArg} name="CylnType"/>
      </td>
      <td>
        <input type='text' value={Volume} onChange={inputArg} name="Volume"/>
      </td>
      <td>
        <input type='text' value={WorkPress} onChange={inputArg} name="WorkPress"/>
      </td>
      <td>
        <input type='text' value={SerialNo} onChange={inputArg} name="SerialNo"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(TestDt)}
          name="TestDt"
          dateFormat="yyyy-MM"
          onChange={value => onChange({ id, target: { name: "TestDt", value } })}
          showMonthYearPicker
        />
      </td>
      <td>
      <select value={Perform} onChange={inputArg} name="Perform">
          <option defaultValue="선택해주세요">선택해주세요</option>
          {units.map(({CdNm, CD}) => (
            <option key={CdNm} value={CD}>
              {CdNm}
            </option>
          ))}
        </select>  
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default H4TableRow;

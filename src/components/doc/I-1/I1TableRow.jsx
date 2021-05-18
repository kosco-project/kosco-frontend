import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const I1TableRow = ({ id, onRemove, onChange, units }) => {
  const  { CylnType, Type, MFGDt, SerialNo, Pressure, Perform }  = useSelector(state => state.i1.D1[id]);
  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>
        <input type='text' value={CylnType} onChange={inputArg} name="CylnType"/>
      </td>
      <td>
        <input type='text' value={Type} onChange={inputArg} name="Type"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(MFGDt)}
          name="MFGDt"
          dateFormat="yyyy-MM"
          onChange={value => onChange({ id, target: { name: "MFGDt", value } })}
          showMonthYearPicker
        />
      </td>
      <td>
        <input type='text' value={SerialNo} onChange={inputArg} name="SerialNo"/>
      </td>
      <td>
        <input type='text' value={Pressure} onChange={inputArg} name="Pressure"/>
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

export default I1TableRow;

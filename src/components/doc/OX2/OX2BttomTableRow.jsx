import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const OX2BttomTableRow = ({ id, onRemoveD2, onChange, num, units, onChangeDatePicker }) => {
  const { TestDt } = useSelector(state => state.ox2.D2[id]);
  const inputArg = ({ target }) => onChange({ target, id });
  return (
    <tr>
      <td>
        {'NO.' + num}
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Manuf" data-form="D2"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Volume" data-form="D2"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="WorkPress" data-form="D2"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="SerialNo" data-form="D2"/>
      </td>
      <td>
        <DatePicker
          selected={TestDt}
          name="TestDt"
          data-form="D2"
          dateFormat="MMM.yyyy"
          onChange={value => onChangeDatePicker({ id, target: { name: "TestDt", form: "D2", value } })}
          showMonthYearPicker
        />
      </td>
      <td>
        <select name="Perform" data-form="D2" onChange={inputArg}>
          <option defaultValue="선택해주세요">선택해주세요</option>
          {units.map(unit => (
            <option key={unit.CdNm} value={unit.CD}>
              {unit.CdNm}
            </option>
          ))}
        </select>
      </td>
      <td onClick={() => onRemoveD2(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default OX2BttomTableRow;

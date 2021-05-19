import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const OX2BttomTableRow = ({ id, onRemoveD2, onChange, num, units, onChangeDatePicker }) => {
  const { Manuf, Volume, WorkPress, SerialNo, TestDt, Perform } = useSelector(state => state.ox2.D2[id]);
  const inputArg = ({ target }) => onChange({ target, id });
  return (
    <tr>
      <td>
        {'NO.' + num}
      </td>
      <td>
        <input type='text' value={Manuf} onChange={inputArg} name="Manuf" data-form="D2"/>
      </td>
      <td>
        <input type='text' value={Volume} onChange={inputArg} name="Volume" data-form="D2"/>
      </td>
      <td>
        <input type='text' value={WorkPress} onChange={inputArg} name="WorkPress" data-form="D2"/>
      </td>
      <td>
        <input type='text' value={SerialNo} onChange={inputArg} name="SerialNo" data-form="D2"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(TestDt)}
          name="TestDt"
          data-form="D2"
          dateFormat="yyyy-MM"
          onChange={value => onChangeDatePicker({ id, target: { name: "TestDt", form: "D2", value } })}
          showMonthYearPicker
        />
      </td>
      <td>
        <select name="Perform" data-form="D2" value={Perform} onChange={inputArg}>
          <option defaultValue="선택해주세요">선택해주세요</option>
          {units.map(({CdNm, CD}) => (
            <option key={CdNm} value={CD}>
              {CdNm}
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

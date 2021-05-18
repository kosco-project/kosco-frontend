import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const ITableRow = ({ id, onRemove, num, onChange }) => {
  const { SerNo, ManufType, ManufDt } = useSelector(state => state.i.D1[id]);
  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' value={SerNo} onChange={inputArg} name="SerNo"/>
      </td>
      <td>
        <input type='text' value={ManufType} onChange={inputArg} name="ManufType"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(ManufDt)}
          name="ManufDt"
          dateFormat="yyyy-MM"
          onChange={value => onChange({ id, target: { name: "ManufDt", value } })}
          showMonthYearPicker
        />
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default ITableRow;

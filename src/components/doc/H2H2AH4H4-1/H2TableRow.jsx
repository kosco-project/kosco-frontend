import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import useGetUnits from '../../../hooks/useGetUnits';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const H2TableRow = ({ id }) => {
  const dispatch = useDispatch();
  const { CylnType, Volume, WorkPress, SerialNo, TestDt, Perform } = useSelector(state => state.docsInput.D1[id]);

  const { units } = useGetUnits();
  const onChange = useChangeD1();

  return (
    <tr>
      <td>
        <input type='text' data-form="D1" data-key={id} value={CylnType} onChange={onChange} name="CylnType"/>
      </td>
      <td>
        <input type='text' data-form="D1" data-key={id} value={Volume} onChange={onChange} name="Volume"/>
      </td>
      <td>
        <input type='text' data-form="D1" data-key={id} value={WorkPress} onChange={onChange} name="WorkPress"/>
      </td>
      <td>
        <input type='text' data-form="D1" data-key={id} value={SerialNo} onChange={onChange} name="SerialNo"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(TestDt) || new Date()}
          name="TestDt"
          dateFormat="yyyy-MM"
          onChange={value => onChange({
            id,
            target: {
              name: "TestDt",
              value,
              dataset: {
                form: "D1",
                key: id,
              },
            }
          })}
          showMonthYearPicker
        />
      </td>
      <td>
        <select data-form="D1" data-key={id} value={Perform} onChange={onChange} name="Perform">
          <option defaultValue="선택해주세요">선택해주세요</option>
            {units.map(unit => (
            <option key={unit.CdNm} value={unit.CD}>
              {unit.CdNm}
            </option>
          ))}
        </select>
      </td>
      <td onClick={() => dispatch(deleteList({ form: 'D1', id }))}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default H2TableRow;

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import useGetUnits from '../../../hooks/useGetUnits';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const I1TableRow = ({ id }) => {
  const dispatch = useDispatch();
  const { CylnType, Type, MFGDt, SerialNo, Pressure, Perform } = useSelector(state => state.docsInput.D1[id]);
  
  const { units } = useGetUnits();
  const onChange = useChangeD1();

  return (
    <tr>
      <td>
        <input type='text' data-form='D1' data-key={id} value={CylnType} onChange={onChange} name="CylnType"/>
      </td>
      <td>
        <input type='text' data-form='D1' data-key={id} value={Type} onChange={onChange} name="Type"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(MFGDt)}
          name="MFGDt"
          dateFormat="yyyy-MM"
          onChange={value => onChange({
            id,
            target: {
              name: "MFGDt",
              value,
              dataset: {
                form: 'D1',
                key: id,
              }
            }
          })}
          showMonthYearPicker
        />
      </td>
      <td>
        <input type='text' data-form='D1' data-key={id} value={SerialNo} onChange={onChange} name="SerialNo"/>
      </td>
      <td>
        <input type='text' data-form='D1' data-key={id} value={Pressure} onChange={onChange} name="Pressure"/>
      </td>
      <td>
        <select data-form='D1' data-key={id} value={Perform} onChange={onChange} name="Perform">
          <option defaultValue="선택해주세요">선택해주세요</option>
          {units.map(({CdNm, CD}) => (
            <option key={CdNm} value={CD}>
              {CdNm}
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

export default I1TableRow;

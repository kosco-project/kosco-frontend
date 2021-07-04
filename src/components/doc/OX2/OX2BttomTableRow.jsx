import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import useGetUnits from '../../../hooks/useGetUnits';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const OX2BttomTableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const { Manuf, Volume, WorkPress, SerialNo, TestDt, Perform } = useSelector(state => state.docsInput.D2[id]);

  const { units } = useGetUnits();
  const onChange = useChangeD1();

  
  return (
    <tr>
      <td>
        {'NO.' + num}
      </td>
      <td>
        <input type='text' value={Manuf} onChange={onChange} name="Manuf" data-form="D2" data-key={id} />
      </td>
      <td>
        <input type='text' value={Volume} onChange={onChange} name="Volume" data-form="D2" data-key={id} />
      </td>
      <td>
        <input type='text' value={WorkPress} onChange={onChange} name="WorkPress" data-form="D2" data-key={id} />
      </td>
      <td>
        <input type='text' value={SerialNo} onChange={onChange} name="SerialNo" data-form="D2" data-key={id} />
      </td>
      <td>
        <DatePicker
          selected={new Date(TestDt)}
          name="TestDt"
          data-form="D2"
          dateFormat="yyyy-MM"
          onChange={value => onChange({
            id,
            target: {
              name: "TestDt",
              value,
              dataset: {
                form: 'D2',
                key: id,
              }
            }
          })}
          showMonthYearPicker
        />
      </td>
      <td>
        <select name="Perform" data-form="D2" data-key={id} value={Perform} onChange={onChange}>
          <option defaultValue="선택해주세요">선택해주세요</option>
          {units.map(({CdNm, CD}) => (
            <option key={CdNm} value={CD}>
              {CdNm}
            </option>
          ))}
        </select>
      </td>
      <td onClick={() => dispatch(deleteList({ form: 'D2', id }))}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default OX2BttomTableRow;

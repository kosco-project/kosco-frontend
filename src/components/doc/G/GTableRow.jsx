import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const GTableRow = ({ id }) => {
  const dispatch = useDispatch();
  const { Qty, SerialNo, Manuf, Type, Capacity, TestDt, Perform } = useSelector(state => state.docsInput.D2[id]);
  
  const onChange = useChangeD1();

  return (
    <tr>
      <td>
        <input type='text' data-form="D2" data-key={id} value={Qty} onChange={onChange} name="Qty"/>
      </td>
      <td>
        <input type='text' data-form="D2" data-key={id} value={SerialNo} onChange={onChange} name="SerialNo"/>
      </td>
      <td>
        <input type='text' data-form="D2" data-key={id} value={Manuf} onChange={onChange} name="Manuf"/>
      </td>
      <td>
        <input type='text' data-form="D2" data-key={id} value={Type} onChange={onChange} name="Type"/>
      </td>
      <td>
        <input type='text' data-form="D2" data-key={id} value={Capacity} onChange={onChange} name="Capacity"/>
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
              dataset: { form: "D2", key: id},
            }
          })}
          showMonthYearPicker
        />
      </td>
      <td>
        <input type='text' data-form="D2" data-key={id} value={Perform} onChange={onChange} name="Perform"/>
      </td>
      <td onClick={() => dispatch(deleteList({ form: 'D2', id }))}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default GTableRow;

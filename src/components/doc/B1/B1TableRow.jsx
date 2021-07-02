import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import { deleteList } from '../../../redux/modules/docsInput';

import DeleteButton from '../common/DeleteButton';

const B1TableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const D1 = useSelector(state => state.docsInput.D1[id]);
  const { GasType, SerialNo, TestDt, TareWT, GrossWT, Capacity, Press, Temp, Perform } = D1;

  const onChangeD1 = useChangeD1();
  
  return (
     <tr>
      <td>{num}</td>
      <td>
        <input type='text' data-name={ id } data-form="D1" data-key="GasType" onChange={e => onChangeD1(e)} value={GasType || ''} />
      </td>
      <td>
        <input type='text' data-name={ id } data-form="D1" data-key="SerialNo" onChange={e => onChangeD1(e)} value={SerialNo || ''} />
      </td>
      <td>
        <DatePicker
          selected={new Date(TestDt) || new Date()}
          name="TestDt"
          dateFormat="yyyy-MM"
          onChange={date => {
            onChangeD1({
              target: {
                dataset: {
                  form: 'D1',
                  name: id,
                  key: "TestDt",
                },
                value: date.getFullYear() + '-' + (date.getMonth() + 1)
              }
            }
            )
          }}
          showMonthYearPicker
        />
      </td>
      <td>
        <input type='text' data-name={ id } data-form="D1" data-key="TareWT" onChange={e => onChangeD1(e)} value={TareWT || ''} />
      </td>
      <td>
        <input type='text' data-name={ id } data-form="D1" data-key="GrossWT" onChange={e => onChangeD1(e)} value={GrossWT || ''} />
      </td>
      <td>
        <input type='text' data-name={ id } data-form="D1" data-key="Capacity" onChange={e => onChangeD1(e)} value={Capacity || ''} />
      </td>
      <td>
        <input type='text' data-name={ id } data-form="D1" data-key="Press" onChange={e => onChangeD1(e)} value={Press || ''} />
      </td>
      <td>
        <input type='text' data-name={ id } data-form="D1" data-key="Temp" onChange={e => onChangeD1(e)} value={Temp || ''} />
      </td>
      <td>
        <select data-name={ id } data-form="D1" data-key="Perform" onChange={e => onChangeD1(e)} value={Perform || ''} >
          <option value='GOOD'>GOOD</option>
          <option value='BAD'>BAD</option>
        </select>
      </td>
      <td onClick={() => dispatch(deleteList({ form: 'D1', id }))}>
      <DeleteButton />
    </td>
    </tr>
  );
};

export default B1TableRow;

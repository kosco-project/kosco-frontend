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

  const onChange = useChangeD1();
  
  return (
     <tr>
      <td>{num}</td>
      <td>
        <input type='text' data-key={ id } data-form="D1" name="GasType" onChange={onChange} value={GasType} />
      </td>
      <td>
        <input type='text' data-key={ id } data-form="D1" name="SerialNo" onChange={onChange} value={SerialNo} />
      </td>
      <td>
        <DatePicker
          selected={new Date(TestDt) || new Date()}
          name="TestDt"
          dateFormat="yyyy-MM"
          onChange={date => {
            onChange({
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
        <input type='text' data-key={ id } data-form="D1" name="TareWT" onChange={onChange} value={TareWT} />
      </td>
      <td>
        <input type='text' data-key={ id } data-form="D1" name="GrossWT" onChange={onChange} value={GrossWT} />
      </td>
      <td>
        <input type='text' data-key={ id } data-form="D1" name="Capacity" onChange={onChange} value={Capacity} />
      </td>
      <td>
        <input type='text' data-key={ id } data-form="D1" name="Press" onChange={onChange} value={Press} />
      </td>
      <td>
        <input type='text' data-key={ id } data-form="D1" name="Temp" onChange={onChange} value={Temp} />
      </td>
      <td>
        <select data-key={ id } data-form="D1" name="Perform" onChange={onChange} value={Perform} >
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

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const ITableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const { SerNo, ManufType, ManufDt } = useSelector(state => state.docsInput.D1[id]);

  const onChange = useChangeD1();

  return (
    <tr>
      <td>{num}</td>
      <td>
        <input type='text' data-form='D1' data-key={id} value={SerNo} onChange={onChange} name="SerNo"/>
      </td>
      <td>
        <input type='text' data-form='D1' data-key={id} value={ManufType} onChange={onChange} name="ManufType"/>
      </td>
      <td>
        <DatePicker
          selected={new Date(ManufDt)}
          name="ManufDt"
          dateFormat="yyyy-MM"
          onChange={value => onChange({
            id,
            target: {
              name: "ManufDt",
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
      <td onClick={() => dispatch(deleteList({ form: 'D1', id }))}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default ITableRow;

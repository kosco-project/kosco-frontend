import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const P1TableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const { ProductType, Qty, Size, Perform } = useSelector(state => state.docsInput.D1[id]);

  const onChange = useChangeD1();


  return (
    <tr>
      <td>
        <div>{num}</div>
      </td>
      <td>
        <input type='text' data-form='D1' data-key={id} value={ProductType} onChange={onChange} name="ProductType"/>
      </td>
      <td>
        <input type='text' data-form='D1' data-key={id} value={Qty} onChange={onChange} name="Qty"/>
      </td>
      <td>
        <input type='text' data-form='D1' data-key={id} value={Size} onChange={onChange} name="Size"/>
      </td>
      <td>
        <select data-form='D1' data-key={id} value={Perform} onChange={onChange} name="Perform">
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

export default P1TableRow;

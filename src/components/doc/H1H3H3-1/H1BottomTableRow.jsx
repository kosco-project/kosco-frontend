import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../../common/DeleteButton';

const H1BottomTableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const {Manuf, Type, SerialNo, Remark } = useSelector(state => state.docsInput.D2[id]);

  const onChange = useChangeD1();

  return (
    <tr>
      <td>
        {'SET NO.' + num}
      </td>
      <td>
        <input type='text' data-form="D2" data-key={id} value={Manuf} onChange={onChange} name="Manuf"/>
      </td>
      <td>
        <input type='text' data-form="D2" data-key={id} value={Type} onChange={onChange} name="Type" />
      </td>
      <td>
        <input type='text' data-form="D2" data-key={id} value={SerialNo} onChange={onChange} name="SerialNo" />
      </td>
      <td>
        <select data-form="D2" data-key={id} value={Remark} onChange={onChange} name="Remark">
          <option value='GOOD'>GOOD</option>
          <option value='BAD'>BAD</option>
        </select>
      </td>
      <td onClick={() => dispatch(deleteList({ form: 'D2', id }))}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default H1BottomTableRow;

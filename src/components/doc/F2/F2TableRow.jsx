import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';
import { deleteList } from '../../../redux/modules/docsInput';
import DeleteButton from '../common/DeleteButton';

const F2TableRow = ({ id, num }) => {
  const dispatch = useDispatch();
  const { manuf, type, s_no, remark } = useSelector(state => state.docsInput.D1[id]);

  const onChange = useChangeD1();

  return (
        <tr>
        <td>{num}</td>
        <td>
            <input type='text' name="manuf" data-form="D2" data-key={id} value={manuf} onChange={onChange} />
        </td>
        <td>
          <input type='text' name="type" data-form="D1" data-key={id} value={type} onChange={onChange} />
        </td>
        <td>
          <input type='text' name="s_no" data-form="D1" data-key={id} value={s_no} onChange={onChange} />
        </td>
        <td>
        <select name="remark" data-form="D1" data-key={id} value={remark} onChange={onChange}>
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

export default F2TableRow;

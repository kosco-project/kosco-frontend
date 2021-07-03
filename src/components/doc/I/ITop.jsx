import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import I_INIT from '../../../docsInitialState/I';
import useChangeD1 from '../../../hooks/useChangeD1';
import { addList } from '../../../redux/modules/docsInput';
import ITableRow from './ITableRow';

const BottomBox = styled.div`
  margin-bottom: 15px;

  > .title {
    margin-bottom: 5px;
    font-weight: 900;
  }

  > table {
    margin-bottom: 15px;
    width: 100%;
    border: 2px solid #000;

    tr {
      border-bottom: 1px solid #000;
    }

    td {
      padding: 10px 5px;
      border-right: 1px solid #000;
      text-align: center;

      &:last-child {
        border: 0;
        padding: 0;
        vertical-align: middle;
        cursor: pointer;
      }
    }

    tbody {
      tr:last-child {
        border-bottom: 0;
      }
    }

    input {
      width: 100%;
      border: 1px solid #000;
    }
  }
`;

const ButtonDiv = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

const ITop = () => {
  const dispatch = useDispatch();
  const D1 = useSelector(state => state.docsInput.D1);
  const D2 = useSelector(state => state.docsInput.D2);

  const onChange = useChangeD1();

  const I_state = I_INIT.D1[0];

  return (
    <>
      {D1 && D2 && (
        <>
        <BottomBox>
          <p className='title'>(1) Specification of Immersion Suit :</p>
          <table>
            <thead>
              <tr>
                <td>NO.</td>
                <td>Ser No. or Lot No.</td>
                <td>Manufacturer / Type</td>
                <td>Manufacture Date</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(D1).map((item, index) => (
                <ITableRow key={item[0]} id={item[0]} num={index + 1} />
              ))}
            </tbody>
          </table>
          <ButtonDiv>
            <button type='button' onClick={() => dispatch(addList({ form: 'D1', initState: I_state }))}>
              추가
            </button>
          </ButtonDiv>
          <p className='title'>(2) Special Additional Requirements :</p>
          <input type='text' data-form='D2' data-key='0' value={D2[0]} onChange={onChange} style={{ marginBottom: 15, width: '100%', border: '1px solid #000' }} />
          <p className='title'>(3) Last Service Date / Service Station :</p>
          <input type='text' data-form='D2' data-key='1' value={D2[1]} onChange={onChange} style={{ width: '100%', border: '1px solid #000' }} />
        </BottomBox>
      </>
      )}
    </>
  );
};

export default ITop;

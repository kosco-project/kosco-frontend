import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import H2_INIT from '../../../docsInitialState/H2';
import AddButton from '../../common/AddButton';
import H2TableRow from './H2TableRow';

const TableBox = styled.div`
  margin-bottom: 15px;
  border: 1px solid #000;

  > .title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > table {
    font-size: 14px;

    tr {
      border-bottom: 1px solid #000;
    }

    td {
      padding: 10px 5px;
      text-align: center;
      border-right: 1px solid #000;
      vertical-align: middle;

      &:last-child {
        border-right: 0;
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

const H2Top = () => {
  const dispatch = useDispatch();
  const D1 = useSelector(state => state.docsInput.D1);

  const H2_state = H2_INIT.D1[0];

  return (
    <>
      {D1 && (
        <>
        <TableBox>
          <div className='title'>Description of Products and Inspection :</div>
          <table>
            <thead>
              <tr>
                <td>Type and Make of Cylinders</td>
                <td>Volume (Ltr)</td>
                <td>Working Press. (Bar)</td>
                <td>Cylinder Serial Nos.</td>
                <td>Last Hydro-Test Date</td>
                <td>Performed / Recommend.</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
               {Object.entries(D1).map(item => (
                  <H2TableRow key={item[0]} id={item[0]} />
              ))}
            </tbody>
          </table>
        </TableBox>
          <ButtonDiv>
            <AddButton form="D1" state={H2_state} />
        </ButtonDiv>
      </>
      )}
    </>
  );
};

export default H2Top;

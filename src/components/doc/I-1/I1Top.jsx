import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import I1_INIT from '../../../docsInitialState/I1';
import AddButton from '../../common/AddButton';
import I1TableRow from './I1TableRow';

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
  margin-bottom: 30px;
  text-align: center;
`;

const I1Top = () => {
  const D1 = useSelector(state => state.docsInput.D1);

  const I1_state = I1_INIT.D1[0];

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
                <td>TYPE</td>
                <td>YEAR OF M.F.G DATE</td>
                <td>Serial Nos.</td>
                <td>Pressure Reading (Kpa / Psi)</td>
                <td>Performed / Recommend.</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
               {Object.entries(D1).map(item => (
                <I1TableRow key={item[0]} id={item[0]} />
              ))}
            </tbody>
          </table>
        </TableBox>
          <ButtonDiv>
            <AddButton form="D1" state={I1_state} />
        </ButtonDiv>
      </>
      )}
    </>
  );
};

export default I1Top;

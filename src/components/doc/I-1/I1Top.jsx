import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
  margin-bottom: 15px;
  text-align: center;
`;

const I1Top = ({ units, onChange, onRemove, onInsert }) => { 
  const D1 = useSelector(state => state.i1.D1);

  return (
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
              <I1TableRow key={item[0]} id={item[0]} onRemove={onRemove} units={units} onChange={onChange} />
            ))}
          </tbody>
        </table>
      </TableBox>
      <ButtonDiv>
        <button type='button' onClick={onInsert}>
          추가
        </button>
      </ButtonDiv>
    </>
  );
};

export default I1Top;

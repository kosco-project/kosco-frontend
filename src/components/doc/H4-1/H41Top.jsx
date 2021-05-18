import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import H41TableRow from './H41TableRow';

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

      &:last-child {
        border-right: 0;
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

const H41Top = ({ onChange, onRemove, onInsert, units }) => {
  const D1 = useSelector(state => state.h2A.D1);
  return (
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
              <H41TableRow key={item[0]} id={item[0]} onRemove={onRemove} onChange={onChange} units={units} />
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

export default H41Top;

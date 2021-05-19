import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import OX2BttomTableRow from './OX2BttomTableRow';

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

    td:first-child {
      width: 25px;
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

const OX2Bottom = ({ onInsertD2, onRemoveD2, onChange, units, onChangeDatePicker }) => {
  const D2 = useSelector(state => state.ox2.D2);

  return (
    <>
      <TableBox>
        <div className='title'>Specification of above sets with cylinder</div>
        <table>
          <thead>
            <tr>
              <td>Nos.</td>
              <td>Manufacturer</td>
              <td>Volume (Ltr)</td>
              <td>Working Press. (Bar)</td>
              <td>Cylinder Serial Nos.</td>
              <td>Last Hydro-Test Date</td>
              <td>Performed / Recommend</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
             {Object.entries(D2).map((item, index) => (
              <OX2BttomTableRow key={item[0]} id={item[0]} onRemove={onRemoveD2} onChange={onChange} num={index + 1} units={units} onChangeDatePicker={onChangeDatePicker}/>
            ))}
          </tbody>
        </table>
      </TableBox>
      <ButtonDiv>
        <button type='button' onClick={onInsertD2}>
          추가
        </button>
      </ButtonDiv>
    </>
  );
};

export default OX2Bottom;

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import H1BottomTableRow from './H1BottomTableRow';

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
      padding: 10px 15px;
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
      white-space: nowrap;
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

const H1Bottom = ({ onInsertD2, onRemoveD2, onChange }) => {
  const D2 = useSelector(state => state.h1h3h31.D2);

  return (
    <>
      <TableBox>
        <div className='title'>Specification of above sets ;</div>
        <table>
          <thead>
            <tr>
              <td>Nos.</td>
              <td>Manufacturer</td>
              <td>Type</td>
              <td>Serial Number</td>
              <td>Remarks</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {Object.entries(D2).map((item, index) => (
                <H1BottomTableRow key={item[0]} id={item[0]} onRemoveD2={onRemoveD2} num={index + 1} onChange={onChange} />
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

export default H1Bottom;

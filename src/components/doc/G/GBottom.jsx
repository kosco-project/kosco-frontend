import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GTableRow from './GTableRow';

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

const GBottom = ({ onChange, onRemove, onInsert }) => {
  const D2 = useSelector(state => state.g.D2);
   
  return (
    <>
      <TableBox>
        <div className='title'>Description of products ;</div>
        <table>
          <thead>
            <tr>
              <td>Qty</td>
              <td>Serial No and/or Location</td>
              <td>Manufacturer</td>
              <td>Type</td>
              <td>Caoacuty</td>
              <td>Last Hydro-Test Date</td>
              <td>Perform</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {Object.entries(D2).map(item => (
              <GTableRow key={item[0]} id={item[0]} onRemove={onRemove} onChange={onChange} />
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

export default GBottom;

import React, { useRef } from 'react';
import styled from 'styled-components';
import OX2BttomTableRow from './OX2BttomTableRow';
import useLists from '../../../hooks/useLists';

const TableBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

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

const OX2Bottom = () => {
  const nextId = useRef(5);
  const [onInsert, onRemove, lists] = useLists([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    }
  ], nextId);
   
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
            {lists.map(list => (
              <OX2BttomTableRow key={list.id} id={list.id} onRemove={onRemove}/>
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

export default OX2Bottom;

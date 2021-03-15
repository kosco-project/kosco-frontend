import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import F2TableRow from './F2TableRow';

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

const F2Top = () => {
  const [lists, setLists] = useState([
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
    },
  ]);
  const nextId = useRef(5);
   
  const onRemove = useCallback(
    id => {
      setLists(lists.filter(list => list.id !== id));
    },
    [lists],
  ); 
  const onInsert = useCallback(
    () => {
      setLists(lists.concat({
        id: nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 1
      }));
    },
    [lists]
  );

  return (
    <>
      <BottomBox>
        <table>
          <thead>
            <tr>
              <td>NO.</td>
              <td>Manufacturer</td>
              <td>Type</td>
              <td>Serial No.</td>
              <td>Remark</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, index) => (
              <F2TableRow key={list.id} id={list.id} onRemove={onRemove} num={index + 1}/>
            ))}
          </tbody>
        </table>
        <ButtonDiv>
          <button type='button' onClick={onInsert}>
            추가
          </button>
        </ButtonDiv>
      </BottomBox>
    </>
  );
};

export default F2Top;

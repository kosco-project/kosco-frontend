import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import B1TableRow from './B1TableRow';

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    width: 100%;
    border: 1px solid #000;
  }

  > .top-description {
    font-size: 14px;

    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        tr {
          border-bottom: 1px solid #000;
        }
        td {
          vertical-align: middle;
        }
      }

      tbody {
        td:first-child {
          width: 25px;

        }
      }

      tr {
        border-right: 0;
        border-left: 0;

        td {
          padding: 10px 5px;
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
          text-align: center;
          vertical-align: middle;
        }

        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        td:last-child {
          border-right: 0;
        }
      }
    }
  }
`;


const B1Top = () => {
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
    (id, e) => {
      e.preventDefault();
      if (lists.length > 1) {
        setLists(lists.filter(list => list.id !== id));
      }
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
      <TopBox>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td>NO.</td>
                <td>TYPE OF GAS CYL.</td>
                <td>CYLINDER SERIAL NUMBERS</td>
                <td>LAST HYDRO-TEST DATE</td>
                <td>TARE WEIGHT (KG)</td>
                <td>GROSS WEIGHT (KG)</td>
                <td>GAS WEIGHT (KG)</td>
                <td>PRESS. READING (BAR)</td>
                <td>TEMP(℃)</td>
                <td>PERFORMED / RECOMMENDED</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {lists.map((list, index) => (
                <B1TableRow key={list.id} id={list.id} onRemove={onRemove} num={index + 1}/>
              ))}
            </tbody>
          </table>
        </div>
      </TopBox>
      <div style={{ textAlign: 'center' }}>
        <button type='button' style={{ marginBottom: 30 }} onClick={onInsert}>
          추가
        </button>
      </div>
    </>
  );
};

export default B1Top;

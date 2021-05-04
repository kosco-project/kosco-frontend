import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useStorage from '../../../hooks/useStorage';
import B1TableRow from './B1TableRow';

const TableBox = styled.div`
  margin-bottom: 15px;
  border: 1px solid #000;

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
        td:last-child {
          vertical-align: middle;
          cursor: pointer;
        }
      }

      tr {
        border-right: 0;
        border-left: 0;

        td {
          padding: 5px 5px;
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
          text-align: center;
        }

        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        td:last-child {
          border-right: 0;
          padding: 0;
        }
      }
    }
  }
`;


const B1Top = ({ onChange, onRemove, onInsert }) => {
  const D1 = useSelector(state => state.b1.D1);
  
  return (
    <>
      <TableBox>
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
              {Object.entries(D1).map((item, index) => (
                  <B1TableRow key={item[0]} id={item[0]} onRemove={onRemove} num={index + 1} onChange={onChange} />
                ))}
            </tbody>
          </table>
        </div>
      </TableBox>
      <div style={{ textAlign: 'center' }}>
        <button type='button' style={{ marginBottom: 30 }} onClick={onInsert}>
          추가
        </button>
      </div>
    </>
  );
};

export default B1Top;

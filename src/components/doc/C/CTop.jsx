import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';

import { C_D1_DATAS } from "../../../docsInitialState/C";

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    border: 1px solid #000;
  }

  > .top-title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
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
      }

      tr {
        border-right: 0;
        border-left: 0;

        td {
          padding: 10px 0;
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
        }
      }
    }
  }
`;

const CTop = () => {
  const D1 = useSelector(state => state.docsInput.D1);

  const onChange = useChangeD1();

  return (
    <>
      {D1 && (
        <TopBox>
        <p className='top-title'>Technical description</p>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>Description</td>
                <td>Value</td>
              </tr>
            </thead>
            <tbody>
              {C_D1_DATAS.map((data, i) => (
                <tr key={data}>
                  <td>{i + 1}</td>
                  <td>{data}</td>
                  <td style={{ padding: '0 5px' }}>
                  <input type='text' data-key={i} data-form="D1" value={D1[i] || ''} onChange={onChange} style={{ width: '100%' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TopBox>
      )}
    </>
  );
};

export default CTop;

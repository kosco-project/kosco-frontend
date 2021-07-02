import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { C_D2_DATAS } from "../../../docsInitialState/C";
import useChangeCheckbox from '../../../hooks/useChangeCheckbox';
import useChangeD1 from '../../../hooks/useChangeD1';

const BottomBox = styled.div`
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
      tbody {
        td:first-child {
          width: 25px;
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

const CBottom = () => {
  const D2 = useSelector(state => state.docsInput.D2);

  const onChangeText = useChangeD1();
  const onChangeCheckbox = useChangeCheckbox();

  return (
    <>
      {D2 && (
        <BottomBox>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>Description</td>
                <td>Carried out</td>
                <td>Not carried</td>
                <td>Not applicable</td>
                <td>Comment</td>
              </tr>
            </thead>
            <tbody>
              {C_D2_DATAS.map((data, i) => (
                <tr key={data}>
                  <td>{i + 1}</td>
                  <td>{data}</td>
                  <td>
                    <input type='checkbox' data-form="D2" checked={!!D2[i].CarriedOut} data-name={i} data-key="CarriedOut" onChange={e => onChangeCheckbox(e)} />
                  </td>
                  <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[i].NotCarried} data-name={i} data-key="NotCarried" onChange={e => onChangeCheckbox(e)} />
                  </td>
                  <td>
                  <input type='checkbox' data-form="D2" checked={!!D2[i].NotApp} data-name={i} data-key="NotApp" onChange={e => onChangeCheckbox(e)} />
                  </td>
                  <td style={{ padding: '0 5px' }}>
                  <input type='text' data-form="D2" data-name={i} data-key="Comm" value={D2[i].Comm} onChange={e => onChangeText(e)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </BottomBox>
      )}
    </>
  );
};

export default CBottom;

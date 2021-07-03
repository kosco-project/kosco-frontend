import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import FTableRow from './FTableRow';

import F_INIT from "../../../docsInitialState/F";
import { addList } from '../../../redux/modules/docsInput';


const TopBox = styled.div`
  margin-bottom: 15px;
  border: 1px solid #000;

  input {
    width: 100%;
    border: 1px solid #000;
  }

  > .top-title {
    padding: 15px;
    border-bottom: 1px solid #000;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
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
          padding: 10px 5px;
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
          text-align: center;
        }

        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        td:first-child {
          width: 25px;
        }

        td:last-child {
          border-right: 0;
          padding: 0;
          vertical-align: middle;
          cursor: pointer;
        }
      }
    }
  }
`;

const FTop = () => {
  const dispatch = useDispatch();
  const D1 = useSelector(state => state.docsInput.D1);
  const F_state = F_INIT.D1[0];

  return (
    <>
      {D1 && (
        <>
        <TopBox>
        <p className='top-title'>FLAME DETECTOR</p>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>SERIAL NO.</td>
                <td>POSITION</td>
                <td>CONDITION</td>
                <td>REMARK</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(D1).map((item, index) => (
                <FTableRow key={item[0]} id={item[0]} num={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </TopBox>
      <div style={{ textAlign: 'center' }}>
        <button type='button' style={{ marginBottom: 30 }} onClick={() => dispatch(addList({ form: 'D1', initState: F_state }))}>
          추가
        </button>
          </div>
      </>
      )}
    </>
  );
};

export default FTop;

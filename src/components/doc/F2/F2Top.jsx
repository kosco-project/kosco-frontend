import React from 'react';
import { useSelector } from 'react-redux';
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
        vertical-align: middle;
        cursor: pointer;
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

const F2Top = ({ onChange, onRemove, onInsert }) => {
  const D1 = useSelector(state => state.f2.D1);

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
            {Object.entries(D1).map((item, index) => (
                <F2TableRow key={item[0]} id={item[0]} onRemove={onRemove} num={index + 1} onChange={onChange} />
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

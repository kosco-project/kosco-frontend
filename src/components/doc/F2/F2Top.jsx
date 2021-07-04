import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import F2_INIT from '../../../docsInitialState/F2';
import AddButton from '../../common/AddButton';
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

const F2Top = () => {
  const D1 = useSelector(state => state.docsInput.D1);

  const F2_state = F2_INIT.D1[0];

  return (
    <>
      {D1 && (
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
                <F2TableRow key={item[0]} id={item[0]} num={index + 1} />
              ))}
            </tbody>
          </table>
          <ButtonDiv>
            <AddButton form="D1" state={F2_state} />
          </ButtonDiv>
        </BottomBox>
      </>
      )}
    </>
  );
};

export default F2Top;

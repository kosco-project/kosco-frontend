import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { H_INIT } from '../../../docsInitialState/H';
import AddButton from '../../common/AddButton';
import H1BottomTableRow from './H1BottomTableRow';

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
      padding: 10px 15px;
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
      white-space: nowrap;
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
  margin-bottom: 30px;
  text-align: center;
`;

const H1Bottom = () => {
  const D2 = useSelector(state => state.docsInput.D2);

  const H_state = H_INIT.D2[0];

  return (
    <>
      {D2 && (
        <>
        <TableBox>
          <div className='title'>Specification of above sets ;</div>
          <table>
            <thead>
              <tr>
                <td>Nos.</td>
                <td>Manufacturer</td>
                <td>Type</td>
                <td>Serial Number</td>
                <td>Remarks</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(D2).map((item, index) => (
                  <H1BottomTableRow key={item[0]} id={item[0]} num={index + 1} />
              ))}
            </tbody>
          </table>
        </TableBox>
        <ButtonDiv>
            <AddButton form="D2" state={H_state} />
        </ButtonDiv>
      </>
      )}
    </>
  );
};

export default H1Bottom;

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import P1_INIT from '../../../docsInitialState/P1';
import AddButton from '../../common/AddButton';
import P1TableRow from './P1TableRow';

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
      padding: 10px 5px;
      text-align: center;
      border-right: 1px solid #000;

      &:first-child {
        width: 60px;
      }
      &:nth-child(2) {
        width: 250px;
      }
      &:last-child {
        border-right: 0;
      }
    }

    tbody {
      tr:last-child {
        border-bottom: 0;
      }
      td:last-child {
          vertical-align: middle;
          cursor: pointer;
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

const P1Top = () => {
  const D1 = useSelector(state => state.docsInput.D1);

  const P1_state = P1_INIT.D1[0];

  return (
    <>
      {D1 && (
        <>
        <TableBox>
          <div className='title'>Description of products ;</div>
          <table>
            <thead>
              <tr>
                <td>NO.</td>
                <td>Type of a product</td>
                <td>Quantity</td>
                <td>SIZE</td>
                <td>Perform.</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(D1).map((item, i) => (
                <P1TableRow key={item[0]} id={item[0]} num={i + 1} />
              ))}
            </tbody>
          </table>
        </TableBox>
          <ButtonDiv>
            <AddButton form="D1" state={P1_state} />
        </ButtonDiv>
      </>
      )}
    </>
  );
};

export default P1Top;

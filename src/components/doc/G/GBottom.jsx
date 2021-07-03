import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addList } from '../../../redux/modules/docsInput';
import GTableRow from './GTableRow';

import G_INIT from '../../../docsInitialState/G';

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
      vertical-align: middle;

      &:last-child {
        border-right: 0;
        padding: 0;
        vertical-align: middle;
        cursor: pointer;
      }
    }

    td:first-child {
      width: 25px;
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

const GBottom = () => {
  const dispatch = useDispatch();
  const D2 = useSelector(state => state.docsInput.D2);

  const G_state = G_INIT.D2[0];
  console.log(G_state);

  return (
    <>
      {D2 && (
        <>
          <TableBox>
        <div className='title'>Description of products ;</div>
        <table>
          <thead>
            <tr>
              <td>Qty</td>
              <td>Serial No and/or Location</td>
              <td>Manufacturer</td>
              <td>Type</td>
              <td>Capacity</td>
              <td>Last Hydro-Test Date</td>
              <td>Perform</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {Object.entries(D2).map(item => (
              <GTableRow key={item[0]} id={item[0]} />
            ))}
          </tbody>
        </table>
      </TableBox>
      <ButtonDiv>
        <button type='button' onClick={() => dispatch(addList({ form: 'D2', initState: G_state }))}>
          추가
        </button>
      </ButtonDiv>
        </>
      )}
      
    </>
  );
};

export default GBottom;

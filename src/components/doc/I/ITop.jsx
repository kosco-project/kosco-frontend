import React from 'react';
import styled from 'styled-components';
import ITableRow from './ITableRow';

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

const ITop = ({ onChange, onRemove, onInsert, lists, onChangeD2 }) => {
  return (
    <>
      <BottomBox>
        <p className='title'>(1) Specification of Immersion Suit :</p>
        <table>
          <thead>
            <tr>
              <td>NO.</td>
              <td>Ser No. or Lot No.</td>
              <td>Manufacturer / Type</td>
              <td>Manufacture Date</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
          {lists.map((list, index) => (
            <ITableRow key={list.id} id={list.id} onRemove={onRemove} num={index + 1} onChange={onChange}/>
              ))}
          </tbody>
        </table>
        <ButtonDiv>
          <button type='button' onClick={onInsert}>
            추가
          </button>
        </ButtonDiv>
        <p className='title'>(2) Special Additional Requirements :</p>
        <input type='text' onChange={onChangeD2} name="0" style={{ marginBottom: 15, width: '100%', border: '1px solid #000' }} />
        <p className='title'>(3) Last Service Date / Service Station :</p>
        <input type='text' onChange={onChangeD2} name="1" style={{ width: '100%', border: '1px solid #000' }} />
      </BottomBox>
    </>
  );
};

export default ITop;

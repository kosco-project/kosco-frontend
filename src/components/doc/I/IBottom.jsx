import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const BottomBox = styled.div`
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
      width: 70%;
      &:nth-child(2) {
        width: 15%;
      }
      &:last-child {
        width: 15%;
        border: 0;
      }
    }

    tbody {
      td:first-child {
        text-align: left;
      }

      tr:last-child {
        border-bottom: 0;
      }
    }
  }
`;

const IBottom = ({ onChecked }) => {
  const D3 = useSelector(state => state.i.D3);
  console.log(D3[4]);
  const inputArg = ({ target }) => onChecked({ target });

  return (
    <BottomBox>
      <p className='title'>(4) Inspection Items :</p>
      <table>
        <thead>
          <tr>
            <td>Outer Condition and Storage condition</td>
            <td>NOMAL</td>
            <td>ABNOMAL</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1&#41; Lay the Suit on a Clean and Flat surface</td>
            <td>
              <input type='checkbox' data-name="0" data-key="Normal" checked={!!D3[0].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="0" data-key="Abnormal" checked={!!D3[0].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td> Closure state of Storage Bag</td>
            <td>
              <input type='checkbox' data-name="1" data-key="Normal" checked={!!D3[1].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="1" data-key="Abnormal" checked={!!D3[1].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td>3&#41; State of Labelling of Donning instruction</td>
            <td>
              <input type='checkbox' data-name="2" data-key="Normal" checked={!!D3[2].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="2" data-key="Abnormal" checked={!!D3[2].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td>4&#41; State of Labelling of Suit type and size</td>
            <td>
              <input type='checkbox' data-name="3" data-key="Normal" checked={!!D3[3].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="3" data-key="Abnormal" checked={!!D3[3].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <td>Working condition</td>
            <td>NOMAL</td>
            <td>ABNOMAL</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1&#41; Check Rips, Tears and / or Puncture</td>
            <td>
              <input type='checkbox' data-name="4" data-key="Normal" checked={!!D3[4].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="4" data-key="Abnormal" checked={!!D3[4].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td>2&#41; Check Zipper operation</td>
            <td>
              <input type='checkbox' data-name="5" data-key="Normal" checked={!!D3[5].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="5" data-key="Abnormal" checked={!!D3[5].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td>3&#41; Check Head support and / or Buoyancy ring</td>
            <td>
              <input type='checkbox' data-name="6" data-key="Normal" checked={!!D3[6].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="6" data-key="Abnormal" checked={!!D3[6].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td>4&#41; Check Inflation hose</td>
            <td>
              <input type='checkbox' data-name="7" data-key="Normal" checked={!!D3[7].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="7" data-key="Abnormal" checked={!!D3[7].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td>5&#41; Check Retro-Reflective tape</td>
            <td>
              <input type='checkbox' data-name="8" data-key="Normal" checked={!!D3[8].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="8" data-key="Abnormal" checked={!!D3[8].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td>6&#41; Check Whistle, Light and Expiration of Batteies</td>
            <td>
              <input type='checkbox' data-name="9" data-key="Normal" checked={!!D3[9].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="9" data-key="Abnormal" checked={!!D3[9].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
          <tr>
            <td>7&#41; Make sure the suit is Dry inside and outside</td>
            <td>
              <input type='checkbox' data-name="10" data-key="Normal" checked={!!D3[10].Normal} onChange={inputArg}/>
            </td>
            <td>
              <input type='checkbox' data-name="10" data-key="Abnormal" checked={!!D3[10].Abnormal} onChange={inputArg}/>
            </td>
          </tr>
        </tbody>
      </table>
    </BottomBox>
  );
};

export default IBottom;

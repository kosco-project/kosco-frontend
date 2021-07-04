import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { W_D1_DATAS } from '../../../docsInitialState/W';
import useChangeCheckbox from '../../../hooks/useChangeCheckbox';
import useChangeD1 from '../../../hooks/useChangeD1';

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    padding: 0 3px;
    border: 1px solid #000;
  }


  > .top-title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .top-description {
    padding: 10px;
    font-size: 14px;

    > .form1 {
      margin-bottom: 10px;
      > input {
        margin-right: 10px;
        margin-left: 10px;
        width: 150px;
      }
      span {
        display: inline-block;
        margin: 3px 5px 0 3px;
        width: 150px;
      }
    }
    
  }
`;

const WTop = () => {
  const D1 = useSelector(state => state.docsInput.D1);

  const onChangeText = useChangeD1();
  const onChangeCheckbox = useChangeCheckbox();

  return (
    <>
      {D1 && (
        <TopBox>
        <p className='top-title'>Technical Description &#58;</p>
        <div className='top-description'>
          {W_D1_DATAS.map((data, i) => (
            <div className='form1' key={i}>
              {data} &#58;
              <input type='text' value={D1[i]} onChange={onChangeText} data-form="D1" data-key={i} />
            </div>
          ))}
          <div className='form1'>
            <div>COVERING &#58;</div>
            <div>
              <input type='checkbox' data-form='D1' data-key="4" onChange={onChangeCheckbox} value="1" checked={D1[4] === "1"}/><span>1&#41; MAIN ENGINE</span>
              <input type='checkbox' data-form='D1' data-key="4" onChange={onChangeCheckbox} value="2" checked={D1[4] === "2"}/><span>2&#41; NO.1&#38;2 GENERATOR</span> 
              <input type='checkbox' data-form='D1' data-key="4" onChange={onChangeCheckbox} value="3" checked={D1[4] === "3"}/><span>3&#41; NO.3 GENERATOR</span>
            </div>
            <div>
              <input type='checkbox' data-form='D1' data-key="4" onChange={onChangeCheckbox} value="4" checked={D1[4] === "4"}/><span>4&#41; PURIFIER ROOM</span>
              <input type='checkbox' data-form='D1' data-key="4" onChange={onChangeCheckbox} value="5" checked={D1[4] === "5"}/><span>5&#41; AUX BOILER</span> 
              <input type='checkbox' data-form='D1' data-key="4" onChange={onChangeCheckbox} value="6" checked={D1[4] === "6"}/><span>6&#41; INCINERATOR</span> 
            </div>
          </div>
        </div>
      </TopBox>
      )}
    </>
  );
};

export default WTop;

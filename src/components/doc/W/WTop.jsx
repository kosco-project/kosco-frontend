import React from 'react';
import styled from 'styled-components';

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

const WTop = ({ onKeyValueForm, state, onChangeCovering }) => {
  const datas = ['MAKER', `TYPE & MFG' NO`, 'NUMBER OF ZONE', 'TYPE OF DETECTOR'];

  return (
    <TopBox>
      <p className='top-title'>Technical Description &#58;</p>
      <div className='top-description'>
        {datas.map((data, i) => (
          <div className='form1' key={i}>
            {data} &#58;
            <input type='text' onChange={onKeyValueForm} data-form="D1" data-name={i} />
          </div>
        ))}
        <div className='form1'>
          <div>COVERING &#58;</div>
          <div>
            <input type='checkbox' onChange={onChangeCovering} data-value="1" checked={state.D1[4] === "1"}/><span>1&#41; MAIN ENGINE</span>
            <input type='checkbox' onChange={onChangeCovering} data-value="2" checked={state.D1[4] === "2"}/><span>2&#41; NO.1&#38;2 GENERATOR</span> 
            <input type='checkbox' onChange={onChangeCovering} data-value="3" checked={state.D1[4] === "3"}/><span>3&#41; NO.3 GENERATOR</span>
          </div>
          <div>
            <input type='checkbox' onChange={onChangeCovering} data-value="4" checked={state.D1[4] === "4"}/><span>4&#41; PURIFIER ROOM</span>
            <input type='checkbox' onChange={onChangeCovering} data-value="5" checked={state.D1[4] === "5"}/><span>5&#41; AUX BOILER</span> 
            <input type='checkbox' onChange={onChangeCovering} data-value="6" checked={state.D1[4] === "6"}/><span>6&#41; INCINERATOR</span> 
          </div>
        </div>
      </div>
    </TopBox>
  );
};

export default WTop;

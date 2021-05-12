import React from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const BottomBox = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 15px;
  flex-flow: row wrap;

  > .left-box {
    flex-grow: 1;

    > div:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  > .right-box {
    > div:not(:last-child) {
      margin-bottom: 10px;
    }

    label {
      display: inline-block;
      width: 150px;
    }

    input {
      margin-right: 5px;
      width: 150px;
      border: 1px solid #000;
    }
  }
`;

const F2Bottom = ({ onChecked, onChangeD2 }) => {
  const D2 = useSelector(state => state.f2.D2);
  const { confirm, f_pressure, f_depth, expiry_date } = D2;

  const inputArg = ({ target }) => onChecked({ target });

  return (
    <BottomBox>
      <div className='left-box'>
        <div>
          <input type='checkbox' checked={confirm === "0"} onChange={inputArg} id='select1' data-value="0"/> <label htmlFor='select1'>Tested By Air Chamber</label>
        </div>
        <div>
          <input type='checkbox' checked={confirm === "1"} onChange={inputArg} id='select2' data-value="1"/> <label htmlFor='select2'>Renewed</label>
        </div>
        <div>
          <input type='checkbox' checked={confirm === "2"} onChange={inputArg} id='select3' data-value="2"/> <label htmlFor='select3'>Repaired</label>
        </div>
        <div>
          <input type='checkbox' checked={confirm === "3"} onChange={inputArg} id='select4' data-value="3"/> <label htmlFor='select4'>Confirmed</label>
        </div>
      </div>

      <div className='right-box'>
        <div>
          <label htmlFor='input1'>Function Pressure </label>: <input type='text' value={f_pressure} onChange={onChangeD2} id='input1' name="f_pressure"/>
          Kg/cm<sup>2</sup>
        </div>
        <div>
          <label htmlFor='input2'>Function Depth </label>: <input type='text' value={f_depth} onChange={onChangeD2} id='input2' name="f_depth"/>
          Meters
        </div>
        <div>
          <label htmlFor='input3'>Expiry Date </label>
          <span style={{ marginRight: '0.3em'}}>:</span>
          <DatePicker
            selected={new Date(expiry_date) || new Date()}
            dateFormat="yyyy-MM"
            onChange={value => onChangeD2({ target: { name: "expiry_date", value } })}
            id='input3'
            showMonthYearPicker
        />
        </div>
      </div>
    </BottomBox>
  );
};

export default F2Bottom;

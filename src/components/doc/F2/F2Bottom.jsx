import React from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';

const BottomBox = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 15px;
  flex-flow: row wrap;


  input[type="checkbox"] {
      width: 15px;
      height: 15px;
  }
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
      margin-left: 10px;
    }

    input {
      width: 150px;
      border: 1px solid #000;
      display: inline-block;
    }
  }
`;

const F2Bottom = () => {
  const D2 = useSelector(state => state.docsInput.D2);
    
  const onChange = useChangeD1();

  return (
    <>
      {D2 && (
        <BottomBox>
        <div className='left-box'>
          <div>
              <input type='checkbox' value="0" data-form="D2" data-key="confirm" checked={D2.confirm === "0"} onChange={onChange} id='select1' />
              <label htmlFor='select1'> Tested By Air Chamber</label>
          </div>
          <div>
              <input type='checkbox' value="1" data-form="D2" data-key="confirm" checked={D2.confirm === "1"} onChange={onChange} id='select2' />
              <label htmlFor='select2'> Renewed</label>
          </div>
          <div>
              <input type='checkbox' value="2" data-form="D2" data-key="confirm" checked={D2.confirm === "2"} onChange={onChange} id='select3' />
              <label htmlFor='select3'> Repaired</label>
          </div>
          <div>
              <input type='checkbox' value="3" data-form="D2" data-key="confirm" checked={D2.confirm === "3"} onChange={onChange} id='select4'/>
              <label htmlFor='select4'> Confirmed</label>
          </div>
        </div>
  
        <div className='right-box'>
          <div>
              <label htmlFor='input1'>Function Pressure </label>:
              <input
                type='text'
                value={D2.f_pressure}
                data-form="D2"
                onChange={onChange}
                id='input1'
                data-key="f_pressure"
              />
            Kg/cm<sup>2</sup>
          </div>
          <div>
              <label htmlFor='input2'>Function Depth </label>:
              <input
                type='text'
                value={D2.f_depth}
                data-form="D2"
                onChange={onChange}
                id='input2'
                data-key="f_depth"
              />
            Meters
          </div>
          <div>
            <label htmlFor='input3'>Expiry Date </label>:
            <DatePicker
              selected={new Date(D2.expiry_date) || new Date()}
              dateFormat="yyyy-MM"
                onChange={value => onChange({
                  target: {
                    value,
                    dataset: { form: "D2", key: "expiry_date"}
                  },
                })}
              id='input3'
              showMonthYearPicker
          />
          </div>
        </div>
      </BottomBox>
      )}
    </>
  );
};

export default F2Bottom;

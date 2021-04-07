import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const TableBox = styled.div`
  input {
    width: 100%;
    border: 1px solid #000;
  }
  > .title {
    margin-bottom: 50px;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
  }
  > .content-box {
    border: 1px solid #000;

    > .line {
      display: flex;
      height: 70px;

      &:not(:last-child) {
        border-bottom: 1px solid #000;
      }

      > div {
        display: flex;
        align-items: center;
      }

      > div:not(:last-child) {
        border-right: 1px solid #000;
      }

      > .first-value {
        flex-grow: 1;
        padding: 0 10px;
        font-weight: 900;
      }

      > .content-value {
        justify-content: center;
        flex-flow: column nowrap;
        padding: 0 5px;
        width: 100px;
        text-align: center;

        > p {
          margin-bottom: 5px;
        }
      }
    }
  }
`;

const L1Top = ({ onWorkingSystem, state, onchangeDatePicker }) => {
  console.log(state.D2[2].Value1);
  return (
    <TableBox>
      <p className='title'>* FOAM LIQUID FOR PORTABLE FOAM APPLICATOR *</p>
      <div className='content-box'>
        <div className='line'>
          <div className='first-value'>• Type of Foam Concentrate</div>
          <div className='content-value'>PROTEIN</div>
          <div className='content-value'>PROTEIN</div>
          <div className='content-value'>PROTEIN</div>
          <div className='content-value'>PROTEIN</div>
        </div>

        <div className='line'>
          <div className='first-value'>• Foam Solution Concentrate</div>
          <div className='content-value'>3%</div>
          <div className='content-value'>3%</div>
          <div className='content-value'>3%</div>
          <div className='content-value'>3%</div>
        </div>

        <div className='line'>
          <div className='first-value'>• Manufacture</div>
          <div className='content-value'>SOULONG</div>
          <div className='content-value'>SOULONG</div>
          <div className='content-value'>SOULONG</div>
          <div className='content-value'>SOULONG</div>
        </div>

        <div className='line'>
          <div className='first-value'>• Location</div>
          <div className='content-value'>
            <input type='text' onChange={onWorkingSystem} data-form="D2" data-name="0" data-key="Value1"/>
          </div>
          <div className='content-value'>
            <input type='text' onChange={onWorkingSystem} data-form="D2" data-name="0" data-key="Value2"/>
          </div>
          <div className='content-value'>
            <input type='text' onChange={onWorkingSystem} data-form="D2" data-name="0" data-key="Value3"/>
          </div>
          <div className='content-value'>
            <input type='text' onChange={onWorkingSystem} data-form="D2" data-name="0" data-key="Value4"/>
          </div>
        </div>

        <div className='line'>
          <div className='first-value'>• Capacity / Quantity</div>
          <div className='content-value'>
            <p>20 Ltr X</p>
            <input type='text' onChange={onWorkingSystem} data-form="D2" data-name="1" data-key="Value1"/>
          </div>
          <div className='content-value'>
            <p>20 Ltr X</p>
            <input type='text' onChange={onWorkingSystem} data-form="D2" data-name="1" data-key="Value2"/>
          </div>
          <div className='content-value'>
            <p>20 Ltr X</p>
            <input type='text' onChange={onWorkingSystem} data-form="D2" data-name="1" data-key="Value3"/>
          </div>
          <div className='content-value'>
            <p>20 Ltr X</p>
            <input type='text' onChange={onWorkingSystem} data-form="D2" data-name="1" data-key="Value4"/>
          </div>
        </div>

        <div className='line'>
          <div className='first-value'>• Expiry Date</div>
          <div className='content-value'>
            <DatePicker
              selected={state.D2[2].Value1}
              dateFormat="MMM.yyyy"
              onChange={value => onchangeDatePicker({ target: { form:"D2", name: "2",key:"Value1", value } })}
              showMonthYearPicker
            />          
          </div>
          <div className='content-value'>
            <DatePicker
              selected={state.D2[2].Value2}
              name="Value2"
              data-form="D2"
              data-name="2"
              data-key="Value1"
              dateFormat="MMM.yyyy"
              onChange={value => onchangeDatePicker({ target: { form:"D2", name: "2",key:"Value2", value } })}
              showMonthYearPicker
            />          
          </div>
          <div className='content-value'>
            <DatePicker
              selected={state.D2[2].Value3}
              name="Value3"
              data-form="D2"
              data-name="2"
              data-key="Value1"
              dateFormat="MMM.yyyy"
              onChange={value => onchangeDatePicker({ target: { form:"D2", name: "2",key:"Value3", value } })}
              showMonthYearPicker
            />          
          </div>
          <div className='content-value'>
            <DatePicker
              selected={state.D2[2].Value4}
              name="Value4"
              data-form="D2"
              data-name="2"
              data-key="Value1"
              dateFormat="MMM.yyyy"
              onChange={value => onchangeDatePicker({ target: { form:"D2", name: "2",key:"Value4", value } })}
              showMonthYearPicker
            />          
          </div>
        </div>
      </div>
    </TableBox>
  );
};

export default L1Top;

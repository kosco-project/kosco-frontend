import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import useChangeD1 from '../../../hooks/useChangeD1';

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

const L1Top = () => {
  const D2 = useSelector(state => state.docsInput.D2);

  const onChange = useChangeD1();

  return (
    <>
      {D2 && (
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
              <input type='text' value={D2[0].Value1} onChange={onChange} data-form="D2" data-key="0" name="Value1"/>
            </div>
            <div className='content-value'>
              <input type='text' value={D2[0].Value2} onChange={onChange} data-form="D2" data-key="0" name="Value2"/>
            </div>
            <div className='content-value'>
              <input type='text' value={D2[0].Value3} onChange={onChange} data-form="D2" data-key="0" name="Value3"/>
            </div>
            <div className='content-value'>
              <input type='text' value={D2[0].Value4} onChange={onChange} data-form="D2" data-key="0" name="Value4"/>
            </div>
          </div>
  
          <div className='line'>
            <div className='first-value'>• Capacity / Quantity</div>
            <div className='content-value'>
              <p>20 Ltr X</p>
              <input type='text' value={D2[1].Value1} onChange={onChange} data-form="D2" data-key="1" name="Value1"/>
            </div>
            <div className='content-value'>
              <p>20 Ltr X</p>
              <input type='text' value={D2[1].Value2} onChange={onChange} data-form="D2" data-key="1" name="Value2"/>
            </div>
            <div className='content-value'>
              <p>20 Ltr X</p>
              <input type='text' value={D2[1].Value3} onChange={onChange} data-form="D2" data-key="1" name="Value3"/>
            </div>
            <div className='content-value'>
              <p>20 Ltr X</p>
              <input type='text' value={D2[1].Value4} onChange={onChange} data-form="D2" data-key="1" name="Value4"/>
            </div>
          </div>
  
          <div className='line'>
            <div className='first-value'>• Expiry Date</div>
            <div className='content-value'>
              <DatePicker
                selected={new Date(D2[2].Value1)}
                dateFormat="yyyy-MM"
                onChange={value => onChange({
                  target: {
                    name: 'Value1',
                    value,
                    dataset: {
                      form: 'D2',
                      key: '2',
                    }
                  }
                })}
                showMonthYearPicker
              />          
            </div>
            <div className='content-value'>
              <DatePicker
                selected={new Date(D2[2].Value2)}
                name="Value2"
                data-form="D2"
                data-key="2"
                dateFormat="yyyy-MM"
                onChange={value => onChange({
                  target: {
                    name: 'Value2',
                    value,
                    dataset: {
                      form: 'D2',
                      key: '2',
                    }
                  }})}
                showMonthYearPicker
              />          
            </div>
            <div className='content-value'>
              <DatePicker
                selected={new Date(D2[2].Value3)}
                name="Value3"
                data-form="D2"
                data-key="2"
                dateFormat="yyyy-MM"
                onChange={value => onChange({target: {
                    name: 'Value3',
                    value,
                    dataset: {
                      form: 'D2',
                      key: '2',
                    }
                  }})}
                showMonthYearPicker
              />          
            </div>
            <div className='content-value'>
              <DatePicker
                selected={new Date(D2[2].Value4)}
                name="Value4"
                data-form="D2"
                data-key="2"
                dateFormat="yyyy-MM"
                onChange={value => onChange({target: {
                    name: 'Value4',
                    value,
                    dataset: {
                      form: 'D2',
                      key: '2',
                    }
                  }})}
                showMonthYearPicker
              />          
            </div>
          </div>
        </div>
      </TableBox>
      )}
    </>
    
  );
};

export default L1Top;

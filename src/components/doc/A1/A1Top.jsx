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
      padding-left: 200px;

      > input {
        margin-right: 10px;
        width: 30px;
      }
    }

    > .form2 {
      margin-bottom: 10px;

      > input {
        margin: 0 3px;
        width: 120px;
      }

      > span {
        margin-left: 50px;
      }
    }
  }
`;

const A1Top = ({ onChange }) => {

  return (
    <TopBox>
      <p className='top-title'>Description of Products ;</p>
      <div className='top-description'>
        <div className='form1'>
          <input type='text' data-name="0" name='top1' onChange={onChange}/>
          CO2 FIRE EXTINGUISHING SYSTEM
        </div>
        <div className='form1'>
          <input type='text' data-name="1" name='top2' onChange={onChange}/>
          FIRE DETECTION SYSTEM
        </div>
        <div className='form2'>
          From
          <input type='text' data-name="2" name='top3' onChange={onChange} />
          we received order for this inspection, and if necessary
        </div>
        <div className='form2'>Re-certification, repair and recharging of above system.</div>
        <div className='form2'>
          The inspection was carried out in the presence of
          <input type='text' data-name="3" onChange={onChange} />
        </div>
        <div className='form2'>
          CO2 installation mark; <input type='text' data-name="4" onChange={onChange} />
        </div>
        <div className='form2'>
          CO2 flooding line leading to; <input type='text' data-name="5" onChange={onChange} style={{ width: 30 }} /> <span>Nos.</span>
        </div>
        <div className='form1'>
          <input type='text' data-name="6" onChange={onChange} />
          Engine Room
        </div>
        <div className='form1'>
          <input type='text' data-name="7" onChange={onChange} />
          Cargo Hold
        </div>
        <div className='form1'>
          <input type='text' data-name="8" onChange={onChange} />
          Pump Room
        </div>
        <div className='form1'>
          <input type='text' data-name="9" onChange={onChange} />
          Paint Locker
        </div>
        <div className='form2'>
          Consisting of <input type='text' data-name="10" onChange={onChange} /> cylinders, each to be containing <input type='text' data-name="11" onChange={onChange} />
          kg of CO2
        </div>
        <div className='form2'>
          And <input type='text' data-name="12" onChange={onChange} /> pilot cylinders, each of capacity <input type='text' data-name="13" onChange={onChange} />
          Kg.
        </div>
      </div>
    </TopBox>
  );
};

export default A1Top;

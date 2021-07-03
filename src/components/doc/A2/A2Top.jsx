import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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

const A2Top = () => {
  const D1 = useSelector(state => state.docsInput.D1);

  const onChange = useChangeD1();

  return (
    <>
    {D1 && (
      <TopBox>
      <p className='top-title'>Description of Products ;</p>
      <div className='top-description'>
        <div className='form1'>
        <input type='text' data-key="0" data-form="D1" value={D1[0]} onChange={onChange}/>
          CO2 FIRE EXTINGUISHING SYSTEM
        </div>
        <div className='form1'>
        <input type='text' data-key="1" data-form="D1" value={D1[1]} onChange={onChange}/>
          FIRE DETECTION SYSTEM
        </div>
        <div className='form2'>
          From
          <input type='text' data-key="2" data-form="D1" value={D1[2]} onChange={onChange} />
          we received order for this inspection, and if necessary
        </div>
        <div className='form2'>Re-certification, repair and recharging of above system.</div>
        <div className='form2'>
          The inspection was carried out in the presence of
          <input type='text' data-key="3" data-form="D1" value={D1[3]} onChange={onChange} />
        </div>
        <div className='form2'>
          <input type='text' data-key="4" data-form="D1" value={D1[4]} onChange={onChange} />
        </div>
        <div className='form2'>
          CO2 flooding line leading to;
          <input type='text' data-key="5" data-form="D1" value={D1[5]} onChange={onChange} style={{ width: 30 }} /> <span>Nos.</span>
        </div>
        <div className='form1'>
        <input type='text' data-key="6" data-form="D1" value={D1[6]} onChange={onChange} />
          Engine Room
        </div>
        <div className='form1'>
        <input type='text' data-key="7" data-form="D1" value={D1[7]} onChange={onChange} />
          Cargo Hold
        </div>
        <div className='form1'>
        <input type='text' data-key="8" data-form="D1" value={D1[8]} onChange={onChange} />
          Pump Room
        </div>
        <div className='form1'>
        <input type='text' data-key="9" data-form="D1" value={D1[9]} onChange={onChange} />
          Paint Locker
        </div>
        <div className='form2'>
          Consisting of <input type='text' data-key="10" data-form="D1" value={D1[10]} onChange={onChange} /> cylinders, each to be containing <input type='text' data-key="11" data-form="D1" value={D1[11]} onChange={onChange} />
          kg of CO2
        </div>
        <div className='form2'>
          And <input type='text' data-key="12" data-form="D1" value={D1[12]} onChange={onChange} /> pilot cylinders, each of capacity <input type='text' data-key="13" data-form="D1" value={D1[13]} onChange={onChange} />
          Kg.
        </div>
      </div>
    </TopBox>
    )}
    </>
  );
};

export default A2Top;

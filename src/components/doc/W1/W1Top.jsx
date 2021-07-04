import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { W1_D1_DATAS } from '../../../docsInitialState/W1';
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
    }
  }
`;

const W1Top = () => {
  const D1 = useSelector(state => state.docsInput.D1);

  const onChange = useChangeD1();

  return (
    <>
      {D1 && (
            <TopBox>
            <p className='top-title'>Technical Description :</p>
            <div className='top-description'>
              {W1_D1_DATAS.map((data, i) => (
                <div className='form1' key={i}>
                  {data} :
                  <input type='text' value={D1[i]} onChange={onChange} data-form="D1" data-key={i}/>
                </div>
              ))}
            </div>
          </TopBox>
      )}
    </>
  );
};

export default W1Top;

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';

const BottomBox = styled.div`
  margin-top: 30px;
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

const FBottom = () => {
  const D2 = useSelector(state => state.docsInput.D2);

  const onChange = useChangeD1();

  return (
    <BottomBox>
      <div className='top-description'>
        <textarea value={D2} data-form="D2" onChange={onChange} style={{ width: '100%', height: '100px' }}></textarea>
      </div>
    </BottomBox>
  );
};

export default FBottom;

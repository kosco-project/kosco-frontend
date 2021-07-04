import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';

const BottomBox = styled.div`
  margin-bottom: 15px;
  border: 1px solid #000;

  > .title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .description {
    padding: 5px;

    > textarea {
      width: 100%;
      height: 100px;
    }
  }
`;

const GBottom2 = () => {
  const D3 = useSelector(state => state.docsInput.D3);

  const onChange = useChangeD1();

  return (
    <BottomBox>
      <div className='title'>Recommendation ;</div>
      <div className='description'>
        <textarea data-form="D3" value={D3} onChange={onChange}></textarea>
      </div>
    </BottomBox>
  );
};

export default GBottom2;

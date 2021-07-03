import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';

const BottomBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

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

const P1Bottom = () => {
  const D2 = useSelector(state => state.docsInput.D2);

  const onChange = useChangeD1();

  return (
    <BottomBox>
      <div className='title'>Recommendation ;</div>
      <div className='description'>
        <textarea data-form='D2' value={D2} onChange={onChange} ></textarea>
      </div>
    </BottomBox>
  );
};

export default P1Bottom;

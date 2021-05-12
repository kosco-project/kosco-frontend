import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Bottom3Box = styled.div`
  margin-bottom: 25px;
  border: 2px solid #000;

  > .title {
    padding: 8px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .description {
    padding: 5px;

    textarea {
      width: 100%;
      height: 100px;
    }
  }
`;

const F2Bottom3 = ({ onChangeD2 }) => {
  const D2 = useSelector(state => state.f2.D2);
  const { recommend } = D2;

  return (
    <Bottom3Box>
      <div className='title'>Recommendation;</div>
      <div className='description'>
        <textarea name='recommend' value={recommend} onChange={onChangeD2}></textarea>
      </div>
    </Bottom3Box>
  );
};

export default F2Bottom3;

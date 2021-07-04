import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';

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

const F2Bottom3 = () => {
  const D2 = useSelector(state => state.docsInput.D2);
  
  const onChange = useChangeD1();

  return (
    <>
      {D2 && (
      <Bottom3Box>
        <div className='title'>Recommendation;</div>
        <div className='description'>
          <textarea value={D2.recommend} data-form="D2" data-key="recommend" onChange={onChange}></textarea>
        </div>
      </Bottom3Box>
      )}
    </>
  );
};

export default F2Bottom3;

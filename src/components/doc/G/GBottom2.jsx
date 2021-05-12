import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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

const GBottom2 = ({ onChangeTextArea }) => {
  const D3 = useSelector(state => state.g.D3);

  return (
    <BottomBox>
      <div className='title'>Recommendation ;</div>
      <div className='description'>
        <textarea value={D3} onChange={onChangeTextArea}></textarea>
      </div>
    </BottomBox>
  );
};

export default GBottom2;

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useChangeD1 from '../../../hooks/useChangeD1';

const Bottom2Box = styled.div`
  margin: 40px 0; 
  font-size: 18px;

  > div {
    input {
      width: 100px;
      border: 1px solid #000;
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  > div:not(:last-child) {
    margin-bottom: 15px;
    line-height: 1.5;
  }
`;

const F2Bottom2 = () => {
  const D2 = useSelector(state => state.docsInput.D2);

  const onChange = useChangeD1();

  return (
    <>
      {D2 && (
        <Bottom2Box>
        <div>
          The above Auto Hydrostatic Release Unit has been inspected and serviced in accordance with the manufacturer's direction and the regulations of
          the responsible ship safety authorities.
        </div>
        <div>
          The hydrostatic release unit shall be serviced together with
          <input type='text' data-form="D2" data-key="value1" value={D2.value1} onChange={onChange} />
          survey at intervals not exceeding 17 months at least at a
          service station.
        </div>
        <div>
          This appendix shall bear the same number as the inspection certificate for
          <input type='text' data-form="D2" data-key="value2" value={D2.value2} onChange={onChange} />
        </div>
      </Bottom2Box>
      )}
    </>
  );
};

export default F2Bottom2;

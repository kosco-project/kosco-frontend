import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Bottom2Box = styled.div`
  margin-bottom: 15px;

  > div {
    input {
      width: 100px;
      border: 1px solid #000;
    }
  }

  > div:not(:last-child) {
    margin-bottom: 15px;
    line-height: 1.5;
  }
`;

const F2Bottom2 = ({ onChangeD2 }) => {
  const D2 = useSelector(state => state.f2.D2);
  const { value1, value2 } = D2;

  return (
    <Bottom2Box>
      <div>
        The above Auto Hydrostatic Release Unit has been inspected and serviced in accordance with the manufacturer's direction and the regulations of
        the responsible ship safety authorities.
      </div>
      <div>
        The hydrostatic release unit shall be serviced together with <input type='text' name="value1" value={value1} onChange={onChangeD2}/> survey at intervals not exceeding 17 months at least at a
        service station.
      </div>
      <div>
        This appendix shall bear the same number as the inspection certificate for <input type='text' name="value2" value={value2} onChange={onChangeD2}/>.
      </div>
    </Bottom2Box>
  );
};

export default F2Bottom2;

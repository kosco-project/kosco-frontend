import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import B3Bottom from './B3Bottom';
import B3Bottom2 from './B3Bottom2';
import B3Top from './B3Top';

const B3Form = ({ units, onWorkingSystem, onWorkingSystemChecked, onAirQualityRequirement, temporaryStorage }) => {
  return (
    <form onSubmit={e => temporaryStorage(e, { form: "B3" })}>
      <Info />
      <B3Top units={units} onWorkingSystem={onWorkingSystem}/>
      <B3Bottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem}/>
      <B3Bottom2 onAirQualityRequirement={onAirQualityRequirement}/>
      <ButtonBox />
    </form>
  );
};

export default B3Form;

import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import A3Bottom from './A3Bottom';
import A3Top from './A3Top';

const A3Form = ({ units, onWorkingSystemChecked, onWorkingSystem, temporaryStorage }) => {
  return (
    <form onSubmit={e => temporaryStorage(e, { form: "A3" })}>
      <Info />
      <A3Top units={units} onWorkingSystem={onWorkingSystem}/>
      <A3Bottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem} />
      <ButtonBox />
    </form>
  );
};

export default A3Form;

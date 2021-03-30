import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import CBottom from './CBottom';
import CTop from './CTop';

const CForm = ({ onWorkingSystem, onWorkingSystemChecked, onKeyValueForm, temporaryStorage }) => {
  return (
    <form onSubmit={e => temporaryStorage(e, { form: "C" })}>
      <Info />
      <CTop onKeyValueForm={onKeyValueForm}/>
      <CBottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem}/>
      <ButtonBox />
    </form>
  );
};

export default CForm;

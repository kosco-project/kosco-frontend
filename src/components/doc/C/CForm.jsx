import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import CBottom from './CBottom';
import CTop from './CTop';

const CForm = ({ onChecked, onChange, onChangeD1, temporaryStorage }) => {
  return (
    <form onSubmit={temporaryStorage}>
      <Info />
      <CTop onChangeD1={onChangeD1}/>
      <CBottom onChecked={onChecked} onChange={onChange}/>
      <ButtonBox />
    </form>
  );
};

export default CForm;

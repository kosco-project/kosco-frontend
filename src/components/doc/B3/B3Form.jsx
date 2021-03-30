import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import B3Bottom from './B3Bottom';
import B3Bottom2 from './B3Bottom2';
import B3Top from './B3Top';

const B3Form = ({ units, onChange, onChecked, onChangeD3, temporaryStorage }) => {
  return (
    <form onSubmit={temporaryStorage}>
      <Info />
      <B3Top units={units} onChange={onChange}/>
      <B3Bottom onChecked={onChecked} onChange={onChange}/>
      <B3Bottom2 onChangeD3={onChangeD3}/>
      <ButtonBox />
    </form>
  );
};

export default B3Form;

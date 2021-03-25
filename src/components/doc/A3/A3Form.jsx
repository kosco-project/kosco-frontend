import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import A3Bottom from './A3Bottom';
import A3Top from './A3Top';

const A3Form = ({ units, onChecked, onChange, temporaryStorage }) => {
  return (
    <form onSubmit={temporaryStorage}>
      <Info />
      <A3Top units={units} onChange={onChange}/>
      <A3Bottom onChecked={onChecked} onChange={onChange} />
      <ButtonBox />
    </form>
  );
};

export default A3Form;

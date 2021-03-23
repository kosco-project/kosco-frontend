import React from 'react';
import ButtonBox from '../common/ButtonBox';
import A2Bottom from './A2Bottom';
import Info from '../common/Info';
import A2Top from './A2Top';

const A2Form = ({ onChange, onChecked, temporaryStorage }) => {
  return (
    <form onSubmit={temporaryStorage}>
      <Info />
      <A2Top onChange={onChange}/>
      <A2Bottom onChecked={onChecked}/>
      <ButtonBox />
    </form>
  );
};

export default A2Form;

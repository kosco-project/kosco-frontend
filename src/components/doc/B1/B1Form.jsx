import React from 'react';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';
import B1Top from './B1Top';

const B1Form = ({ onChange, onRemove, onInsert, lists, onTemporaryStorage }) => {
  return (
    <form onSubmit={onTemporaryStorage}>
      <Info />
      <B1Top onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists}/>
      <ButtonBox />
    </form>
  );
};

export default B1Form;

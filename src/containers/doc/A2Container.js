import React from 'react';
import A2Form from "../../components/doc/A2/A2Form";
import useTemporaryStorage from '../../hooks/useTemporaryStorage';

const A2Container = () => {
  const [onChange, onChecked, temporaryStorage] = useTemporaryStorage();

  return (
    <A2Form onChange={onChange} onChecked={onChecked} temporaryStorage={temporaryStorage}/>
  )
};

export default A2Container;
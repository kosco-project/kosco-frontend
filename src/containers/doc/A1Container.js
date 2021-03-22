// import axios from 'axios';
// import moment from 'moment';
import React from 'react';
import A1Form from "../../components/doc/A1/A1Form";
import useTemporaryStorage from '../../hooks/useTemporaryStorage';

const A1Container = () => {
  const [onChange, onChecked, temporaryStorage] = useTemporaryStorage();

  return (
    <A1Form onChange={onChange} onChecked={onChecked} temporaryStorage={temporaryStorage}/>
  )
};

export default A1Container;
import { useState } from 'react';

const useTempModal = () => {
  const [tempVisible, setTempVisible] = useState(false);
  const hideTempModal = e => {
    console.log(e.target);
    e.preventDefault();
    setTempVisible(false);
  };

  const showTempModal = e => {
    console.log(e.target);
    e.preventDefault();
    setTempVisible(true);
  };

  return { tempVisible, setTempVisible, showTempModal, hideTempModal };
};

export default useTempModal;

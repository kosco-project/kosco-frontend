import { useState } from 'react';

const useCompModal = () => {
  const [compVisible, setCompVisible] = useState(false);

  const showCompModal = e => {
    e.preventDefault();
    setCompVisible(true);
  };

  const hideCompModal = e => {
    e.preventDefault();
    setCompVisible(false);
  };

  return [compVisible, setCompVisible, showCompModal, hideCompModal];
};

export default useCompModal;

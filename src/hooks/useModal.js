import { useState } from 'react';

const useModal = (initialMode = false) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  console.log(modalOpen);

  return [modalOpen, setModalOpen];
};

export default useModal;

import { useState } from 'react';

const useModal = (initialMode = false) => {
  const [modalOpen, setModalOpen] = useState(initialMode);

  return [modalOpen, setModalOpen];
};

export default useModal;

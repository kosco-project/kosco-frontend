import React from 'react';
import A1Form from "../../components/doc/A1/A1Form";
import useStorage from '../../hooks/useStorage';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';

const A1Container = () => {
  // const [visible, setVisible] = useState(false);

  const { onProductsDescription, onInspectionDescription, onStorage, visible, setVisible, commVisible, setCommVisible } = useStorage({
    H: {
      RCVNO: "",
      VESSELNM: "",
    },
    D1: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
    },
    D2: {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      10: 1,
      11: 1,
      12: 1,
      13: 1,
      14: 1,
      15: 1,
      16: 1,
      17: 1,
      18: 1,
      19: 1,
      20: 1,
      21: 1,
    },
  });

  const showModal = e => {
    e.preventDefault();
    setVisible(true);
  };
  const showCommModal = e => {
    e.preventDefault();
    setCommVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
    setCommVisible(false);
  };


  return (
    <>
      {visible && (
        <SaveModal form="A1" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="A1" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <A1Form onProductsDescription={onProductsDescription} onInspectionDescription={onInspectionDescription} onStorage={onStorage} showModal={showModal} showCommModal={showCommModal}/>
    </>
  )
};

export default A1Container;
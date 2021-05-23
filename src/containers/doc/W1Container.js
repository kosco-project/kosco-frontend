import { useEffect } from 'react';
import W1Form from '../../components/doc/W1/W1Form';
import useStorage from '../../hooks/useStorage';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import getItemData from '../../components/common/getItemData';

const W1Container = () => {
  const {
    checkState,
    onWorkingSystem,
    onStorage,
    state,
    setState,
    onKeyValueForm,
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
  } = useStorage({
    H: {
      RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
      VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
      CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
    },
    D1: {
      0: '',
      1: '',
      2: '',
      3: '',
    },
    D2: {
      0: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      1: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      2: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      3: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      4: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      5: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      6: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      7: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      8: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      9: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
      10: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: '',
      },
    },
  });

  useEffect(() => {
    getItemData(setState);
  }, [setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='W1'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='W1'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <W1Form
        checkState={checkState}
        state={state}
        onWorkingSystem={onWorkingSystem}
        onKeyValueForm={onKeyValueForm}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default W1Container;

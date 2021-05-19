import { useEffect } from 'react';
import moment from 'moment';
import L1Form from '../../components/doc/L1/L1Form';
import useStorage from '../../hooks/useStorage';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import getItemData from '../../components/common/getItemData';

const L1Container = () => {
  const {
    onWorkingSystem,
    state,
    setState,
    onStorage,
    onchangeDatePicker,
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
  } = useStorage({
    H: {
      RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
      VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
      CERTNO: JSON.parse(localStorage.getItem('certNo')),
    },
    D2: {
      0: {
        DESCT: 'Location',
        Value1: '',
        Value2: '',
        Value3: '',
        Value4: '',
      },
      1: {
        DESCT: 'Capacity / Quantity',
        Value1: '',
        Value2: '',
        Value3: '',
        Value4: '',
      },
      2: {
        DESCT: 'Expiry Date',
        Value1: moment().format('yyyy-MM'),
        Value2: moment().format('yyyy-MM'),
        Value3: moment().format('yyyy-MM'),
        Value4: moment().format('yyyy-MM'),
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
          form='L1'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='L1'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <L1Form
        state={state}
        onWorkingSystem={onWorkingSystem}
        onchangeDatePicker={onchangeDatePicker}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default L1Container;

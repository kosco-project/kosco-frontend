import axios from 'axios';
import { useEffect, useState } from 'react';
import A3Form from '../../components/doc/A3/A3Form';
import useStorage from '../../hooks/useStorage';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import getItemData from '../../components/common/getItemData';

const A3Container = () => {
  const [units, setUnits] = useState([]);
  const {
    onWorkingSystem,
    onWorkingSystemChecked,
    onStorage,
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    state,
    setState,
  } = useStorage();

  const getUnits = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/inspectionList/units`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
        },
      }
    );
    setUnits(res.data.units);
  };

  useEffect(() => {
    getUnits();
    getItemData(setState);
  }, [setState]);

  return (
    <>
      <A3Form
        units={units}
        onWorkingSystemChecked={onWorkingSystemChecked}
        onWorkingSystem={onWorkingSystem}
        showModal={showModal}
        showCommModal={showCommModal}
        state={state}
      />
    </>
  );
};

export default A3Container;

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import OX2Form from '../../components/doc/OX2/OX2Form';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  addInitialStateD2,
  changeFieldD1,
  changeField,
  deleteInitialState,
  deleteInitialStateD2,
  changeTextArea,
  changeDatePicker,
  getOX2h,
  getOX2data,
  ox2Initialize,
} from '../../redux/modules/ox2';
import getItemData from '../../components/common/getItemData';

const OX2Container = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [units, setUnits] = useState([]);
  const ox2state = useSelector(state => state.ox2);
  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    setState,
  } = useStorage();
  const datas = [
    'MASKS CHECKED',
    'BREATHING VALVE CHECKED',
    'PRESSURE REGULATOR CHECKED',
    'SUPPLY HOSE CONNECTION CHECKED',
    'OXYGEN INHALER CHECKED',
    'DEVICE WHIT FUNCTION TEST',
    'SERVICE LABEL PUT ON DEVICE',
    'DELETE',
  ];

  const onInsert = useCallback(() => {
    dispatch(addInitialState(Object.keys(ox2state.D1).length));
  }, [dispatch, ox2state.D1]);

  const onInsertD2 = useCallback(() => {
    dispatch(addInitialStateD2(Object.keys(ox2state.D2).length));
  }, [dispatch, ox2state.D2]);

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );

  const onRemoveD2 = useCallback(
    id => {
      dispatch(deleteInitialStateD2(id));
    },
    [dispatch]
  );

  const onChangeD1 = ({ id, target }) => {
    const { name, checked } = target;
    dispatch(
      changeFieldD1({
        id,
        checked,
        name,
      })
    );
  };

  const onChange = ({ id, target }) => {
    const { value, name, dataset } = target;
    dispatch(
      changeField({
        name,
        id,
        value,
        dataset,
      })
    );
  };

  const onChangeTextArea = e => {
    const { value } = e.target;
    dispatch(changeTextArea(value));
  };

  const onChangeDatePicker = ({ id, target }) => {
    const { name, value, form } = target;
    dispatch(
      changeDatePicker({
        name,
        id,
        value,
        form,
      })
    );
  };

  const onStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        ox2state,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );
      hideModal();
      console.log('res', res);
      await history.push('/inspection');
    } catch (e) {
      console.log(e);
    }
  };

  const getUnits = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/checkedInfo`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
        },
      }
    );
    setUnits(res.data.data);
  };

  const getData = useCallback(async () => {
    dispatch(
      getOX2h({
        RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
        VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
        CERTNO: JSON.parse(localStorage.getItem('certNo')),
      })
    );
    const data = await getItemData(setState);

    if (!data) return;

    await dispatch(getOX2data(data));
  }, [dispatch, setState]);

  useEffect(() => {
    getUnits();
    getData();

    return () => {
      dispatch(ox2Initialize());
    };
  }, [dispatch, getData, setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='OX2'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='OX2'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <OX2Form
        units={units}
        onChangeD1={onChangeD1}
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        onChangeTextArea={onChangeTextArea}
        datas={datas}
        onInsertD2={onInsertD2}
        onRemoveD2={onRemoveD2}
        onChangeDatePicker={onChangeDatePicker}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default OX2Container;

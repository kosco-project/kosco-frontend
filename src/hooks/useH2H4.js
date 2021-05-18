import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getItemData from '../components/common/getItemData';
import {
  addInitialState,
  changeField,
  deleteInitialState,
  changeTextArea,
  getH2AData,
  getH2A_H,
  h2AInitialize,
} from '../redux/modules/h2A';
import useStorage from './useStorage';

const useH2H4 = () => {
  const state = useSelector(state => state.h2A);
  const [visible, setVisible] = useState(false);
  const [commVisible, setCommVisible] = useState(false);
  const { setState } = useStorage();

  const history = useHistory();
  const [units, setUnits] = useState([]);

  const dispatch = useDispatch();

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

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );
  const onInsert = useCallback(() => {
    dispatch(addInitialState(Object.keys(state.D1).length));
  }, [dispatch, state.D1]);

  const onChange = ({ id, target }) => {
    const { value, name } = target;
    console.log(id, value, name);
    dispatch(
      changeField({
        id,
        value,
        name,
      })
    );
  };

  const onChangeTextArea = e => {
    const { value } = e.target;
    dispatch(changeTextArea(value));
  };

  const onStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        state,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );
      hideModal();
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
      getH2A_H({
        RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
        VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
        CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
      })
    );
    const data = await getItemData(setState);
    if (!data) return;
    await dispatch(getH2AData(data));
  }, [dispatch, setState]);

  useEffect(() => {
    getUnits();
    getData();

    return () => {
      dispatch(h2AInitialize());
    };
  }, [dispatch, getData, setState]);

  return {
    onStorage,
    onChangeTextArea,
    onChange,
    onInsert,
    onRemove,
    units,
    visible,
    commVisible,
    hideModal,
    showModal,
    showCommModal,
  };
};

export default useH2H4;

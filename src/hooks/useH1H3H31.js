import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getItemData from '../components/common/getItemData';
import {
  addInitialState,
  addInitialStateD2,
  changeFieldD1,
  changeField,
  deleteInitialState,
  deleteInitialStateD2,
  changeTextArea,
  getH1H3H,
  getH1H3Data,
  h1h3Initialize,
} from '../redux/modules/h1h3h31';
import useStorage from './useStorage';

const useH1H3H31 = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.h1h3h31);
  const [visible, setVisible] = useState(false);
  const [commVisible, setCommVisible] = useState(false);
  const { setState } = useStorage();

  const history = useHistory();

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

  const onInsert = useCallback(() => {
    dispatch(addInitialState(Object.keys(state.D1).length));
  }, [dispatch, state.D1]);

  const onInsertD2 = useCallback(() => {
    dispatch(addInitialStateD2(Object.keys(state.D2).length));
  }, [dispatch, state.D2]);

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

  const onStorage = async (e, form, path) => {
    e.preventDefault();

    try {
      await axios.post(
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

  useEffect(() => {
    (async () => {
      dispatch(
        getH1H3H({
          RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
          VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
          CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
        })
      );
      const data = await getItemData(setState);
      if (!data) return;
      await dispatch(getH1H3Data(data));
    })();

    return () => {
      dispatch(h1h3Initialize());
    };
  }, [dispatch, setState]);
  return {
    onChangeD1,
    onChange,
    onRemove,
    onInsert,
    onStorage,
    onChangeTextArea,
    onInsertD2,
    onRemoveD2,
    visible,
    commVisible,
    hideModal,
    showModal,
    showCommModal,
  };
};

export default useH1H3H31;

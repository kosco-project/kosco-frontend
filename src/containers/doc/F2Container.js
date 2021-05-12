import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import F2Form from '../../components/doc/F2/F2Form';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  changeField,
  changeFieldD2,
  deleteInitialState,
  storage,
  checkBox,
  getF2H,
  getF2Data,
  f2Initailize,
} from '../../redux/modules/f2';
import getItemData from '../../components/common/getItemData';

const FContainer = () => {
  const dispatch = useDispatch();
  const nextId = useRef(4);
  const f2state = useSelector(state => state.f2);

  const history = useHistory();

  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    setState,
  } = useStorage();

  const onInsert = useCallback(() => {
    dispatch(
      addInitialState(
        (nextId.current = Object.keys(f2state.D1).length
          ? Math.max(...Object.keys(f2state.D1).map(list => +list)) + 1
          : 0)
      )
    );
  }, [dispatch, f2state.D1]);

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );

  const onChange = ({ id, target }) => {
    const { value, name } = target;
    dispatch(
      changeField({
        id,
        value,
        name,
      })
    );
  };

  const onChangeD2 = ({ target }) => {
    const { value, name } = target;
    dispatch(
      changeFieldD2({
        value,
        name,
      })
    );
  };

  const onChecked = ({ target }) => {
    const { checked, dataset } = target;
    if (!checked) return;
    dispatch(
      checkBox({
        value: dataset.value,
      })
    );
  };

  const onStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        f2state,
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
        getF2H({
          RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
          VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
          CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
        })
      );
      const data = await getItemData(setState);

      if (!data) return;
      await dispatch(getF2Data(data));
    })();

    return () => {
      dispatch(f2Initailize());
    };
  }, [dispatch, setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='F2'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='F2'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <F2Form
        onChange={onChange}
        onChangeD2={onChangeD2}
        onRemove={onRemove}
        onInsert={onInsert}
        onChecked={onChecked}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default FContainer;

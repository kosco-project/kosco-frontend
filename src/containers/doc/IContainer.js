import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import IForm from '../../components/doc/I/IForm';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  changeField,
  deleteInitialState,
  changeFieldD2,
  checkBox,
  getIh,
  getIdata,
  iInitialize,
} from '../../redux/modules/i';
import getItemData from '../../components/common/getItemData';

const IContainer = () => {
  const dispatch = useDispatch();
  const istate = useSelector(state => state.i);
  console.log(istate);
  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    setState,
  } = useStorage();

  const history = useHistory();

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );

  const onInsert = useCallback(() => {
    dispatch(addInitialState(Object.keys(istate.D1).length));
  }, [dispatch, istate.D1]);

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
        name: dataset.name,
        key: dataset.key,
      })
    );
  };
  const onStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        istate,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );
      hideModal();
      await history.push('/inspection');
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      dispatch(
        getIh({
          RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
          VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
          CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
        })
      );
      const data = await getItemData(setState);

      if (!data) return;

      await dispatch(getIdata(data));
    })();

    return () => {
      dispatch(iInitialize());
    };
  }, [dispatch, setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='I'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='I'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <IForm
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        onChangeD2={onChangeD2}
        onChecked={onChecked}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default IContainer;

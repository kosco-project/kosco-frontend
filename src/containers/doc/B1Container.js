import axios from 'axios';
import { useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import B1Form from '../../components/doc/B1/B1Form';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  b1Initialize,
  changeField,
  deleteInitialState,
  getB1Data,
  getB1H,
} from '../../redux/modules/b1';
import getItemData from '../../components/common/getItemData';

const B1Container = () => {
  const dispatch = useDispatch();
  const nextId = useRef(4);
  const b1state = useSelector(state => state.b1);

  const history = useHistory();

  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    state,
    setState,
  } = useStorage();

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );
  const onInsert = useCallback(() => {
    dispatch(
      addInitialState(
        (nextId.current = Object.keys(b1state.D1).length
          ? Math.max(...Object.keys(b1state.D1).map(list => +list)) + 1
          : 0)
      )
    );
  }, [b1state.D1, dispatch]);

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

  const onStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        b1state,
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
        getB1H({
          RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
          VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
          CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
        })
      );
      const data = await getItemData(setState);
      if (!data) return;
      await dispatch(getB1Data(data));
    })();

    return () => {
      dispatch(b1Initialize());
    };
  }, [dispatch, setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='B1'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='B1'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <B1Form
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        showModal={showModal}
        showCommModal={showCommModal}
        state={state}
      />
    </>
  );
};

export default B1Container;

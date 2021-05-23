import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import P1Form from '../../components/doc/P1/P1Form';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  changeField,
  changeTextArea,
  deleteInitialState,
  getP1data,
  getP1h,
  p1Initialize,
} from '../../redux/modules/p1';
import getItemData from '../../components/common/getItemData';

const P1Container = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const p1state = useSelector(state => state.p1);
  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    setState,
  } = useStorage();

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );

  const onInsert = useCallback(() => {
    dispatch(addInitialState(Object.keys(p1state.D1).length));
  }, [dispatch, p1state.D1]);

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

  const onChangeTextArea = e => {
    const { value } = e.target;
    dispatch(changeTextArea(value));
  };

  const onStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        p1state,
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

  const getData = useCallback(async () => {
    dispatch(
      getP1h({
        RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
        VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
        CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
      })
    );

    const data = await getItemData(setState);

    if (!data) return;

    await dispatch(getP1data(data));

    return () => {
      dispatch(p1Initialize());
    };
  }, [dispatch, setState]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {visible && (
        <SaveModal
          form='P1'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='P1'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <P1Form
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        onChangeTextArea={onChangeTextArea}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default P1Container;

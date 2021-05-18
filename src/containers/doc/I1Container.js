import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import I1Form from '../../components/doc/I-1/I1Form';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  changeField,
  changeTextArea,
  deleteInitialState,
  getI1h,
  getI1data,
  i1Initialize,
} from '../../redux/modules/i1';
import getItemData from '../../components/common/getItemData';

const I1Container = () => {
  const dispatch = useDispatch();
  const i1state = useSelector(state => state.i1);
  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    setState,
  } = useStorage();
  const [units, setUnits] = useState([]);

  const history = useHistory();

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );

  const onInsert = useCallback(() => {
    dispatch(addInitialState(Object.keys(i1state.D1).length));
  }, [dispatch, i1state.D1]);

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
        i1state,
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
      getI1h({
        RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
        VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
        CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
      })
    );
    const data = await getItemData(setState);

    if (!data) return;

    await dispatch(getI1data(data));
  }, [dispatch, setState]);

  useEffect(() => {
    getUnits();
    getData();

    return () => {
      dispatch(i1Initialize());
    };
  }, [dispatch, getData]);

  return (
    <>
      {visible && (
        <SaveModal
          form='I-1'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='I-1'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <I1Form
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        units={units}
        onChangeTextArea={onChangeTextArea}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default I1Container;

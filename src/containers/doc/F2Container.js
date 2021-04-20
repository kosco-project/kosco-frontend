import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import F2Form from '../../components/doc/F2/F2Form';
import useStorage from "../../hooks/useStorage";
import { addInitialState, changeField, changeFieldD2, deleteInitialState, storage, checkBox } from "../../redux/modules/f2";


const FContainer = () => {
  const dispatch = useDispatch();
  const nextId = useRef(4);
  const state = useSelector(state => state.f2);
  const { visible, showModal, commVisible, showCommModal, hideModal, setVisible, setCommVisible } = useStorage()
  const [lists, setLists] = useState([
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    }
  ]);

  const onInsert = useCallback(
    () => {
      setLists(lists.concat({
        id: nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 0
      }));
      dispatch(
        addInitialState(nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 0))
    },
    [dispatch, lists]
  );

  const onRemove = useCallback(
    id => {
      if (lists.length > 1) {
        setLists(lists.filter(list => list.id !== id));
        dispatch(
          deleteInitialState(...lists.filter(list => list.id === id))
        )
      }
    },
    [dispatch, lists],
  );

  const onChange = ({ id, target }) => {
    const { value, name } = target;
    dispatch(
      changeField({
          id,
          value,
          name,
      })
    )
  }

  const onChangeD2 = ({ target }) => {
    const { value, name } = target;
    dispatch(
      changeFieldD2({
        value,
        name,
      })
    )
  }

  const onChecked = ({ target }) => {
    const { checked, dataset } = target;
    if (!checked) return;
    dispatch(
      checkBox({
        value: dataset.value,
        }
      )
    )
  }


  const onStorage = async ( e, form, path ) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`, state, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
        }
      );
      setVisible(false);
      setCommVisible(false);
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  }
  console.log('state', state);
  useEffect(() => {
    dispatch(
      storage({
        RCVNO: localStorage.getItem('rcvNo'),
        VESSELNM: localStorage.getItem('shipNm'), 
      })
    )
  }, [dispatch])

  return (
    <>
      {visible && (
        <SaveModal form="F2" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="F2" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <F2Form
        onChange={onChange}
        onChangeD2={onChangeD2}
        onRemove={onRemove}
        onInsert={onInsert}
        lists={lists}
        onChecked={onChecked}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  )
};


export default FContainer;
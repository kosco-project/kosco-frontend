import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import GForm from '../../components/doc/G/GForm';
import useStorage from "../../hooks/useStorage";
import { addInitialState, changeField, changeTextArea, deleteInitialState, storage } from "../../redux/modules/g";

const GContainer = () => {
  const dispatch = useDispatch();
  const nextId = useRef(4);
  const state = useSelector(state => state.g);
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
  ])

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

  const onChange = ({ id, target }) => {
    const { value, name } = target;
    dispatch(
      changeField({
        id,
        value,
        name,
      })
    )
  };

  const onChangeTextArea = e => {
    const { value } = e.target;
    dispatch(
      changeTextArea(value)
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
        <SaveModal form="G" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="G" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <GForm
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        lists={lists}
        onChangeTextArea={onChangeTextArea}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  )
}

export default GContainer;
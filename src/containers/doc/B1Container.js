import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import B1Form from "../../components/doc/B1/B1Form";
import useStorage from "../../hooks/useStorage";
import { addInitialState, changeField, deleteInitialState, temporaryStorage } from "../../redux/modules/b1";

const B1Container = () => {
  const dispatch = useDispatch();
  const nextId = useRef(4);
  const state = useSelector(state => state.b1);
  const { visible, showModal, commVisible, showCommModal, hideModal } = useStorage()
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
  }

  const onTemporaryStorage = async ( e, form, path ) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`, state, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
        }
      );
      // setVisible(false);
      // setCommVisible(false);
      hideModal();
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  }
  console.log('state', state);
  useEffect(() => {
    dispatch(
      temporaryStorage({
        RCVNO: localStorage.getItem('rcvNo'),
        VESSELNM: localStorage.getItem('shipNm'), 
      })
    )
  }, [dispatch])

  return (
    <>
      {visible && (
        <SaveModal form="B1" path="save" onStorage={onTemporaryStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="B1" path="complete" onStorage={onTemporaryStorage} hideModal={hideModal}/>
      )}
      <B1Form onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} showModal={showModal} showCommModal={showCommModal}/>
    </>
  )
}

export default B1Container;
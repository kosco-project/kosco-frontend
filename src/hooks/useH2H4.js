import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import useStorage from "./useStorage";

const useH2H4 = ( addInitialState, changeField, deleteInitialState, storage, changeTextArea ) => {
  const state = useSelector(state => state.h2A);
  // const { hideModal } = useStorage();
  const [visible, setVisible] = useState(false);
  const [commVisible, setCommVisible] = useState(false);

  const [units, setUnits] = useState([]);
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
  const dispatch = useDispatch();
  const nextId = useRef(4);

  const showModal = e => {
    e.preventDefault();
    setVisible(true);
  }

  const showCommModal = e => {
    e.preventDefault();
    setCommVisible(true);
  }

  const hideModal = () => {
    setVisible(false);
    setCommVisible(false);
  }

  const onRemove = useCallback(
    id => {
      if (lists.length > 1) {
        setLists(lists.filter(list => list.id !== id));
        dispatch(
          deleteInitialState(...lists.filter(list => list.id === id))
        )
      }
    },
    [deleteInitialState, dispatch, lists],
  );
  const onInsert = useCallback(
    () => {
      setLists(lists.concat({
        id: nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 0
      }));
      dispatch(
        addInitialState(nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 0))
    },
    [addInitialState, dispatch, lists]
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
      hideModal();
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    dispatch(
      storage({
        RCVNO: localStorage.getItem('rcvNo'),
        VESSELNM: localStorage.getItem('shipNm'),
      })
    )
  }, [dispatch, storage]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/checkedInfo`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
      });
      setUnits(res.data.data);
    })();
  }, []);


  return {onStorage, onChangeTextArea, onChange, onInsert, onRemove, lists, units, visible, commVisible, hideModal, showModal, showCommModal}
}

export default useH2H4;
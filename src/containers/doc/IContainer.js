import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IForm from '../../components/doc/I/IForm';
import { addInitialState, changeField, deleteInitialState, storage, changeFieldD2, checkBox } from "../../redux/modules/i";


const IContainer = () => {
const dispatch = useDispatch();
const nextId = useRef(4);
const state = useSelector(state => state.i);
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

  const onChangeD2 = ({ target }) => {
    const { value, name } = target;
    dispatch(
      changeFieldD2({
        value,
        name,
      })
    )
  };
  
  const onChecked = ({ target }) => {
    const { checked, dataset } = target;
    if (!checked) return;
    dispatch(
      checkBox({
        name: dataset.name,
        key: dataset.key,
        }
      )
    )

  }
  const onStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`, state, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
        }
      );
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
}, [dispatch])
  
  return (
    <IForm onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} onStorage={onStorage} onChangeD2={onChangeD2} onChecked={onChecked}/>
  )
}

export default IContainer;
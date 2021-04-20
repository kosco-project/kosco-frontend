// import axios from "axios";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import H31Form from '../../components/doc/H3-1/H31Form';
import useH1H3H31 from "../../hooks/useH1H3H31";
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import { addInitialState, addInitialStateD2, changeFieldD1, changeField, deleteInitialState, deleteInitialStateD2, storage, changeTextArea } from "../../redux/modules/h1h3h31";


const H31container = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(state => state.h31);
  const { onChangeD1, onChange, onRemove, onInsert, lists, D2Lists, onStorage, onChangeTextArea, onInsertD2, onRemoveD2, visible, commVisible, hideModal, showModal, showCommModal } = useH1H3H31(addInitialState, addInitialStateD2, changeFieldD1, changeField, deleteInitialState, deleteInitialStateD2, storage, changeTextArea);

  const datas = [
    'FACE MASK CHECKED',
    'BREATHING VALVE CHECKED',
    'REGULATOR UNIT CHECKED',
    'HARNESS CHECKED',
    'FUNCTION TEST WITH TEST EQUIPMENT',
    'SERVICE LABEL PUT ON EQUIPMENT',
    'CYLINDER INSPECTED AS PER ENCLOSED SERVICE CHART H4.',
    'DELETE',
  ];

  // const nextId = useRef(2);
  // const [lists, setLists] = useState([
  //   {
  //     id: 0,
  //   },
  // ]);
  // const nextIdD2 = useRef(5);
  // const [D2Lists, setD2Lists] = useState([
  //   {
  //     id: 0,
  //   },
  // ])

  // const onInsert = useCallback(
  //   () => {
  //     setLists(lists.concat({
  //       id: nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 0
  //     }));
  //     dispatch(
  //       addInitialState(nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 0))
  //   },
  //   [dispatch, lists]
  // );

  // const onInsertD2 = useCallback(
  //   () => {
  //     setD2Lists(D2Lists.concat({
  //       id: nextIdD2.current = D2Lists.length ? Math.max(...D2Lists.map(list => list.id)) + 1 : 0
  //     }));
  //     dispatch(
  //       addInitialStateD2(nextIdD2.current = D2Lists.length ? Math.max(...D2Lists.map(list => list.id)) + 1 : 0))
  //   },
  //   [D2Lists, dispatch]
  // );

  // const onRemove = useCallback(
  //   id => {
  //     if (lists.length > 1) {
  //       setLists(lists.filter(list => list.id !== id));
  //       dispatch(
  //         deleteInitialState(...lists.filter(list => list.id === id))
  //       )
  //     }
  //   },
  //   [dispatch, lists],
  // );

  // const onRemoveD2 = useCallback(
  //   id => {
  //     if (D2Lists.length > 1) {
  //       setD2Lists(D2Lists.filter(list => list.id !== id));
  //       dispatch(
  //         deleteInitialStateD2(...D2Lists.filter(list => list.id === id))
  //       )
  //     }
  //   },
  //   [dispatch, D2Lists],
  // );

  // const onChangeD1 = ({ id, target }) => {
  //   const { name, checked } = target;
  //   dispatch(
  //     changeFieldD1({
  //       id,
  //       checked,
  //       name,
  //     })
  //   )
  // }

  // const onChange = ({ id, target }) => {
  //   const { value, name, dataset } = target;
  //   dispatch(
  //     changeField({
  //       name,
  //       id,
  //       value,
  //       dataset,
  //     })
  //   )
  // }

  // const onChangeTextArea = e => {
  //   const { value } = e.target;
  //   dispatch(
  //     changeTextArea(value)
  //   )
  // }


  // const onStorage = async ( e, form, path ) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`, state, {
  //       headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
  //       }
  //     );
  //     console.log('res', res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // useEffect(() => {
  //   dispatch(
  //     storage({
  //       RCVNO: localStorage.getItem('rcvNo'),
  //       VESSELNM: localStorage.getItem('shipNm'), 
  //     })
  //   )
  // }, [dispatch])

  return (
    <>
      {visible && (
        <SaveModal form="H3-1" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="H3-1" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <H31Form 
        onChangeD1={onChangeD1}
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        lists={lists}
        D2Lists={D2Lists}
        onStorage={onStorage}
        onChangeTextArea={onChangeTextArea}
        datas={datas}
        onInsertD2={onInsertD2}
        onRemoveD2={onRemoveD2}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  )
}

export default H31container;
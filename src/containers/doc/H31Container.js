import H31Form from '../../components/doc/H3-1/H31Form';
import useH1H3H31 from "../../hooks/useH1H3H31";
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import { addInitialState, addInitialStateD2, changeFieldD1, changeField, deleteInitialState, deleteInitialStateD2, storage, changeTextArea } from "../../redux/modules/h1h3h31";


const H31container = () => {
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
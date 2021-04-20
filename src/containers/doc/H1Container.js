import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import H1Form from "../../components/doc/H1/H1Form";
import useH1H3H31 from "../../hooks/useH1H3H31";
import { addInitialState, addInitialStateD2, changeFieldD1, changeField, deleteInitialState, deleteInitialStateD2, storage, changeTextArea } from "../../redux/modules/h1h3h31";

const H1Container = () => {
  const { onChangeD1, onChange, onRemove, onInsert, lists, D2Lists, onStorage, onChangeTextArea, onInsertD2, onRemoveD2, visible, commVisible, hideModal, showModal, showCommModal } = useH1H3H31(addInitialState, addInitialStateD2, changeFieldD1, changeField, deleteInitialState, deleteInitialStateD2, storage, changeTextArea);
  const datas = [
    'FACE MASK CHECKED',
    'BREATHING VALVE CHECKED',
    'REGULATOR UNIT CHECKED',
    'HARNESS CHECKED',
    'DEVICE WITH FUNCTION TEST',
    'SERVICE LABEL PUT ON DEVICE',
    'CYLINDER INSPECTED AS PER ENCLOSED SERVICE CHART H2.',
    'DELETE',
  ];

  return (
    <>
      {visible && (
        <SaveModal form="H1" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="H1" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <H1Form
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

export default H1Container;
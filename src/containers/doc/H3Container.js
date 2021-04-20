import H3Form from "../../components/doc/H3/H3Form";
import useH1H3H31 from "../../hooks/useH1H3H31";
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import { addInitialState, addInitialStateD2, changeFieldD1, changeField, deleteInitialState, deleteInitialStateD2, storage, changeTextArea } from "../../redux/modules/h1h3h31";

const H3Container = () => {
  const { onChangeD1, onChange, onRemove, onInsert, lists, D2Lists, onStorage, onChangeTextArea, onInsertD2, onRemoveD2, visible, commVisible, hideModal, showModal, showCommModal } = useH1H3H31(addInitialState, addInitialStateD2, changeFieldD1, changeField, deleteInitialState, deleteInitialStateD2, storage, changeTextArea);

  const datas = [
    'MASKS CHECKED',
    'BREATHING VALVE CHECKED',
    'PRESSURE REGULATOR CHECKED',
    'SUPPLY HOSE CONNECTION CHECKED',
    'OXYGEN INHALER CHECKED',
    'DEVICE WHIT FUNCTION TEST',
    'SERVICE LABEL PUT ON DEVICE',
    'DELETE',
  ];

  return (
    <>
      {visible && (
        <SaveModal form="H3" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="H3" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <H3Form
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

export default H3Container;
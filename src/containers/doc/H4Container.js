import H4Form from "../../components/doc/H4/H4Form";
import useH2H4 from "../../hooks/useH2H4";
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import { addInitialState, changeField, deleteInitialState, storage, changeTextArea } from "../../redux/modules/h2A";

const H4Container = () => {
  const { onStorage, onChangeTextArea, onChange, onInsert, onRemove, lists, units, visible, commVisible, hideModal, showModal, showCommModal } = useH2H4(addInitialState, changeField, deleteInitialState, storage, changeTextArea);

  return (
    <>
      {visible && (
        <SaveModal form="H4" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="H4" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <H4Form
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        lists={lists}
        onStorage={onStorage}
        onChangeTextArea={onChangeTextArea}
        units={units}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  )
}

export default H4Container;
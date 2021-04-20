// import { useState } from "react";
import H2AForm from "../../components/doc/H2-A/H2AForm";
import useH2H4 from "../../hooks/useH2H4";
import SaveModal from "../../components/common/SaveModal";
import CompleteModal from "../../components/common/CompleteModal";
import { addInitialState, changeField, deleteInitialState, storage, changeTextArea } from "../../redux/modules/h2A";

const H2AContainer = () => {
  const { onStorage, onChangeTextArea, onChange, onInsert, onRemove, lists, units, visible, commVisible, hideModal, showModal, showCommModal } = useH2H4(addInitialState, changeField, deleteInitialState, storage, changeTextArea);
  return (
    <>
      {visible && (
        <SaveModal form="H2-A" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="H2-A" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <H2AForm
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

export default H2AContainer;
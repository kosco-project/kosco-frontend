// import { useState } from "react";
import H2AForm from '../../components/doc/H2-A/H2AForm';
import useH2H4 from '../../hooks/useH2H4';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import {
  addInitialState,
  changeField,
  deleteInitialState,
  changeTextArea,
} from '../../redux/modules/h2A';

const H2AContainer = () => {
  const {
    onChangeTextArea,
    onChange,
    onInsert,
    onRemove,
    units,
    visible,
    commVisible,
    hideModal,
    showModal,
    showCommModal,
  } = useH2H4();
  return (
    <>
      {visible && <SaveModal form='H2-A' path='save' hideModal={hideModal} />}
      {commVisible && (
        <CompleteModal form='H2-A' path='complete' hideModal={hideModal} />
      )}
      <H2AForm
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        onChangeTextArea={onChangeTextArea}
        units={units}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default H2AContainer;

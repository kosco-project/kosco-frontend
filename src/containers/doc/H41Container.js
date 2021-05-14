import H41Form from '../../components/doc/H4-1/H41Form';
import useH2H4 from '../../hooks/useH2H4';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import {
  addInitialState,
  changeField,
  deleteInitialState,
  changeTextArea,
} from '../../redux/modules/h2A';

const H41Container = () => {
  const {
    onStorage,
    onChangeTextArea,
    onChange,
    onInsert,
    onRemove,
    lists,
    units,
    visible,
    commVisible,
    hideModal,
    showModal,
    showCommModal,
  } = useH2H4(addInitialState, changeField, deleteInitialState, changeTextArea);

  return (
    <>
      {visible && (
        <SaveModal
          form='H4-1'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='H4-1'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <H41Form
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        lists={lists}
        onChangeTextArea={onChangeTextArea}
        units={units}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default H41Container;

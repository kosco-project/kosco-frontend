import H2Form from '../../components/doc/H2/H2Form';
import useH2H4 from '../../hooks/useH2H4';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import {
  addInitialState,
  changeField,
  deleteInitialState,
  changeTextArea,
} from '../../redux/modules/h2A';

const H2Container = () => {
  const {
    onChangeTextArea,
    onChange,
    onInsert,
    onRemove,
    onStorage,
    units,
    visible,
    commVisible,
    hideModal,
    showModal,
    showCommModal,
  } = useH2H4();

  return (
    <>
      {visible && (
        <SaveModal
          form='H2'
          path='save'
          hideModal={hideModal}
          onStorage={onStorage}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='H2'
          path='complete'
          hideModal={hideModal}
          onStorage={onStorage}
        />
      )}
      <H2Form
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

export default H2Container;

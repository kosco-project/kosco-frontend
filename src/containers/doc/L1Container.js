import L1Form from '../../components/doc/L1/L1Form';
import useStorage from "../../hooks/useStorage";
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';

const L1Container = () => {
  const { onWorkingSystem, state, onStorage, onchangeDatePicker, visible, showModal, commVisible, showCommModal, hideModal } = useStorage({
    H: {
      RCVNO: "",
      VESSELNM: "",
    },
    D2: {
      0: {
        DESCT: "Location",
        Value1: "",
        Value2: "",
        Value3: "",
        Value4: "",
      },
      1: {
        DESCT: "Capacity / Quantity",
        Value1: "",
        Value2: "",
        Value3: "",
        Value4: "",
      },
      2: {
        DESCT: "Expiry Date",
        Value1: new Date(),
        Value2: new Date(),
        Value3: new Date(),
        Value4: new Date(),
      },
    }
  })
  return (
    <>
      {visible && (
        <SaveModal form="L1" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="L1" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <L1Form state={state} onWorkingSystem={onWorkingSystem} onStorage={onStorage} onchangeDatePicker={onchangeDatePicker} showModal={showModal} showCommModal={showCommModal}/>
    </>
  )
}

export default L1Container;
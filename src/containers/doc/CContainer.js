import CForm from "../../components/doc/C/CForm";
import useStorage from "../../hooks/useStorage";
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';

const CConatiner = () => {
  const { onWorkingSystem, onStorage, onKeyValueForm, state, checkState, visible, showModal, commVisible, showCommModal, hideModal } = useStorage({
    H: {
      RCVNO: "",
      VESSELNM: "",
    },
    D1: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
    },
    D2: {
      0: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      1: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      2: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      3: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      4: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      5: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      6: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      7: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      8: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      9: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      10: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      11: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      12: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      13: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      14: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      15: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      16: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      17: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      18: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      19: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      20: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      21: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      22: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      23: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      24: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      25: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      26: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      27: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      28: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      29: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },
      30: {
        CarriedOut: 1,
        NotCarried: 0,
        NotApp: 0,
        Comm: "",
      },

    },
  })

  return (
    <>
      {visible && (
        <SaveModal form="C" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="C" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <CForm checkState={checkState} onWorkingSystem={onWorkingSystem} onKeyValueForm={onKeyValueForm} onStorage={onStorage} state={state} showModal={showModal} showCommModal={showCommModal}/>
    </>
  )
}

export default CConatiner;

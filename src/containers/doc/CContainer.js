import CForm from "../../components/doc/C/CForm";
import useStorage from "../../hooks/useStorage";

const CConatiner = () => {
  const { onWorkingSystem, onStorage, onKeyValueForm, state, checkState } = useStorage({
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
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      1: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      2: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      3: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      4: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      5: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      6: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      7: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      8: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      9: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      10: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      11: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      12: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      13: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      14: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      15: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      16: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      17: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      18: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      19: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      20: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      21: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      22: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      23: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      24: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      25: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      26: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      27: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      28: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      29: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      30: {
        carriedOut: 1,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },

    },
  })

  return (
    <CForm checkState={checkState} onWorkingSystem={onWorkingSystem} onKeyValueForm={onKeyValueForm} onStorage={onStorage} state={state}/>
  )
}

export default CConatiner;

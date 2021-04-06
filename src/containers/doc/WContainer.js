import WForm from '../../components/doc/W/WForm';
import useStorage from "../../hooks/useStorage";

const WContainer = () => {

  const { checkState, onWorkingSystem, onStorage, state, onChangeTextArea, onKeyValueForm, onChangeCovering } = useStorage({
    H: {
      RCVNO: "",
      VESSELNM: ""
    },
    D1: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "1",
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

    },
    D3: "",
  })
  

  return (
    <WForm checkState={checkState} state={state} onWorkingSystem={onWorkingSystem} onChangeTextArea={onChangeTextArea} onStorage={onStorage} onKeyValueForm={onKeyValueForm} onChangeCovering={onChangeCovering}/>
  )
}
export default WContainer;
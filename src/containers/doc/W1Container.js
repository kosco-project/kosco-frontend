import W1Form from '../../components/doc/W1/W1Form';
import useStorage from "../../hooks/useStorage";

const W1Container = () => {
  const { checkState, onWorkingSystem, onStorage, state, onKeyValueForm } = useStorage({
    H: {
      RCVNO: "",
      VESSELNM: ""
    },
    D1: {
      0: "",
      1: "",
      2: "",
      3: "",
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
    }
  })

  
  return (
    <W1Form checkState={checkState} state={state} onWorkingSystem={onWorkingSystem} onKeyValueForm={onKeyValueForm} onStorage={onStorage}/>
  )
}

export default W1Container;
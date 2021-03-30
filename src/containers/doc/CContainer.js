import axios from "axios";
import { useState } from "react";
import CForm from "../../components/doc/C/CForm";

const CConatiner = () => {
  const [state, setState] = useState({
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
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      1: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      2: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      3: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      4: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      5: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      6: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      7: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      8: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      9: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      10: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      11: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      12: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      13: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      14: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      15: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      16: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      17: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      18: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      19: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      20: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      21: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      22: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      23: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      24: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      25: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      26: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      27: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      28: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      29: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },
      30: {
        carriedOut: 0,
        notCarried: 0,
        notApplicable: 0,
        Comm: "",
      },

    },
  })

  const onChecked = e => {
    const { checked, dataset } = e.target
    if (checked) {
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: {
            ...state[dataset.form][dataset.name],
            [dataset.key]: 1,
          }
        }
      })
    } else {
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: {
            ...state[dataset.form][dataset.name],
            [dataset.key]: 0,
          }
        }
      })
    }
  }
  const onChange = e => {
    const { value, dataset } = e.target
    setState({
      ...state,
      [dataset.form]: {
        ...state[dataset.form],
        [dataset.name]: {
          ...state[dataset.form][dataset.name],
          [dataset.key]: value,
        }
      }
    })
  }

  const onChangeD1 = e => {
    const { value, dataset } = e.target
    setState({
      ...state,
      [dataset.form]: {
        ...state[dataset.form],
        [dataset.name]: value,
      }
    })
  }

  const temporaryStorage = async e => {
    e.preventDefault();
    await setState({
      ...state,
      H: {
        RCVNO: localStorage.getItem('rcvNo'),
        VESSELNM: localStorage.getItem('shipNm'),
      },
    })
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/doc/C/save`, state, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
        }
      );
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  }

  console.log('state', state);
  return (
    <CForm onChecked={onChecked} onChange={onChange} onChangeD1={onChangeD1} temporaryStorage={temporaryStorage}/>
  )
}

export default CConatiner;

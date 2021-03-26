import axios from 'axios';
import { useState } from 'react';

const useTemporaryStorage = () => {
  const [state, setState] = useState({
    H: {
      CERTNO: "",
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
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
    },
    D2: {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      10: 1,
      11: 1,
      12: 1,
      13: 1,
      14: 1,
      15: 1,
      16: 1,
      17: 1,
      18: 1,
      19: 1,
      20: 1,
      21: 1,
    },
  })
  
  const onChange = e => {
    const { value, dataset } = e.target
    console.log(state);

      setState({
        ...state,
        D1: {
          ...state.D1,
          [dataset.name]: value,
        },
      })
  }

  const onChecked = e => {
    const { checked, dataset } = e.target
    console.log(state);
    if (checked) {
      setState({
        ...state,
        D2: {
          ...state.D2,
          [dataset.name]: 1,
        }
      })
    } else {
      setState({
        ...state,
        D2: {
          ...state.D2,
          [dataset.name]: 0,
        }
      })
    } 
  }

  const temporaryStorage = async e => {
    e.preventDefault();
    await setState({
      ...state,
      H: {
        CERTNO: localStorage.getItem('certNo'),
        VESSELNM: localStorage.getItem('shipNm'),
      },
    })
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/doc/A1/save`, state, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
        }
      );
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  }

  return [ onChange, onChecked, temporaryStorage ]
}

export default useTemporaryStorage;
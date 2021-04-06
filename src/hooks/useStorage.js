import axios from 'axios';
import { useState } from 'react';

const useTemporaryStorage = initialState => {
  console.log('초기값', initialState);

  const [state, setState] = useState(initialState);
  
  const onProductsDescription = e => {
    const { value, dataset } = e.target
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: value,
        },
      })
  }

  const onWorkingSystem = e => {
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

  const onKeyValueForm = e => {
    const { value, dataset } = e.target
    setState({
      ...state,
      [dataset.form]: {
        ...state[dataset.form],
        [dataset.name]: value,
      }
    })
  }

  const onInspectionDescription = e => {
    const { checked, dataset } = e.target
    if (checked) {
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: 1,
        }
      })
    } else {
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: 0,
        }
      })
    } 
  }


  const checkState = e => {
    const { checked, dataset } = e.target
    if (!checked) return;
    setState({
      ...state,
      [dataset.form]: {
        ...state[dataset.form],
        [dataset.name]: {
          ...state[dataset.form][dataset.name],
          CarriedOut: dataset.key === 'CarriedOut' ? 1 : 0,
          NotCarried: dataset.key === 'NotCarried' ? 1 : 0,
          NotApplicable: dataset.key === 'NotApplicable' ? 1 : 0,
        }
      }
    })
  }

  const onWorkingSystemChecked = e => {
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

  const onStorage = async (e, form, path) => {
    e.preventDefault();
    await setState({
      ...state,
      H: {
        RCVNO: localStorage.getItem('rcvNo'),
        VESSELNM: localStorage.getItem('shipNm'),
      },
    })
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`, state, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}` },
        }
      );
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  }


  console.log('state',state);
  return { onProductsDescription, onInspectionDescription, onStorage, onWorkingSystem, onWorkingSystemChecked, onKeyValueForm, state, checkState }
}

export default useTemporaryStorage;
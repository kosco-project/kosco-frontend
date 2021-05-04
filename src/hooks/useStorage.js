import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStorage = initialState => {
  const [state, setState] = useState(initialState);
  const [visible, setVisible] = useState(false);
  const [commVisible, setCommVisible] = useState(false);

  const history = useHistory();

  const onChangeTextArea = e => {
    const { value, dataset } = e.target;
    setState({
      ...state,
      [dataset.form]: value,
    });
  };
  const onProductsDescription = e => {
    const { value, dataset } = e.target;
    setState({
      ...state,
      [dataset.form]: {
        ...state[dataset.form],
        [dataset.name]: value,
      },
    });
  };

  const onWorkingSystem = e => {
    const { value, dataset } = e.target;
    console.log(dataset);
    setState({
      ...state,
      [dataset.form]: {
        ...state[dataset.form],
        [dataset.name]: {
          ...state[dataset.form][dataset.name],
          [dataset.key]: value,
        },
      },
    });
  };

  // L1
  const onchangeDatePicker = ({ target }) => {
    const { form, name, key, value } = target;
    setState({
      ...state,
      [form]: {
        ...state[form],
        [name]: {
          ...state[form][name],
          [key]: value,
        },
      },
    });
  };

  const onKeyValueForm = e => {
    const { value, dataset } = e.target;
    console.log(dataset);
    setState({
      ...state,
      [dataset.form]: {
        ...state[dataset.form],
        [dataset.name]: value,
      },
    });
  };

  const onInspectionDescription = e => {
    const { checked, dataset } = e.target;
    if (checked) {
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: 1,
        },
      });
    } else {
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: 0,
        },
      });
    }
  };

  const checkState = e => {
    const { checked, dataset } = e.target;
    if (!checked) return;
    setState({
      ...state,
      [dataset.form]: {
        ...state[dataset.form],
        [dataset.name]: {
          ...state[dataset.form][dataset.name],
          CarriedOut: dataset.key === 'CarriedOut' ? 1 : 0,
          NotCarried: dataset.key === 'NotCarried' ? 1 : 0,
          NotApp: dataset.key === 'NotApp' ? 1 : 0,
        },
      },
    });
  };

  // W
  const onChangeCovering = e => {
    const { checked, dataset } = e.target;
    if (!checked) return;
    setState({
      ...state,
      D1: {
        ...state.D1,
        4: dataset.value,
      },
    });
  };

  const onWorkingSystemChecked = e => {
    const { checked, dataset } = e.target;
    if (checked) {
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: {
            ...state[dataset.form][dataset.name],
            [dataset.key]: 1,
          },
        },
      });
    } else {
      setState({
        ...state,
        [dataset.form]: {
          ...state[dataset.form],
          [dataset.name]: {
            ...state[dataset.form][dataset.name],
            [dataset.key]: 0,
          },
        },
      });
    }
  };

  const onStorage = async (e, form, path) => {
    e.preventDefault();
    // await setState({
    //   ...state,
    //   H: {
    //     RCVNO: localStorage.getItem('rcvNo'),
    //     VESSELNM: localStorage.getItem('shipNm'),
    //   },
    // });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        state,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );
      setVisible(false);
      setCommVisible(false);
      await history.push('/inspection');
      await console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  };

  const showModal = e => {
    e.preventDefault();
    setVisible(true);
  };
  const showCommModal = e => {
    e.preventDefault();
    setCommVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
    setCommVisible(false);
  };

  console.log('state', state);
  return {
    showModal,
    showCommModal,
    hideModal,
    onProductsDescription,
    onInspectionDescription,
    onStorage,
    onWorkingSystem,
    onWorkingSystemChecked,
    onKeyValueForm,
    state,
    setState,
    checkState,
    onChangeTextArea,
    onChangeCovering,
    onchangeDatePicker,
    visible,
    setVisible,
    commVisible,
    setCommVisible,
  };
};

export default useStorage;

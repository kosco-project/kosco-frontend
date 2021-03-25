import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import A3Form from "../../components/doc/A3/A3Form";

const A3Container = () => {
  const [units, setUnits] = useState([]);
  const [state, setState] = useState({
    H: {
      CERTNO: "",
      CERTDT: "",
      VESSELNM: "",
    },
    D1: {
      0: {
        value: "",
        unit: "대",
        remarks: "",
      },
      1: {
        value: "",
        unit: "대",
        remarks: "",
      },
      2: {
        value: "",
        unit: "대",
        remarks: "",
      },
      3: {
        value: "",
        unit: "대",
        remarks: "",
      },
      4: {
        value: "",
        unit: "대",
        remarks: "",
      },
      5: {
        value: "",
        unit: "대",
        remarks: "",
      },
      6: {
        value: "",
        unit: "대",
        remarks: "",
      },
      7: {
        value: "",
        unit: "대",
        remarks: "",
      },
    },
    D2: {
      0: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      1: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      2: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      3: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      4: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      5: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      6: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      7: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      8: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      9: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      10: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      11: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      12: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      13: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      14: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      15: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
      16: {
        carriedOut: 0,
      },
      17: {
        carriedOut: 0,
        notCarried: 0,
        remarks: "",
      },
    }
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

  const temporaryStorage = async e => {
    console.log('e');
    e.preventDefault();
    await setState({
      ...state,
      H: {
        CERTNO: localStorage.getItem('certNo'),
        CERTDT: moment().format('YYYYMMDD'),
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
  console.log(state);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/inspectionList/units`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`},
      });
      setUnits(res.data.units);
    })();
  }, []);

  return (
    <A3Form units={units} onChecked={onChecked} onChange={onChange} temporaryStorage={temporaryStorage}/>
  )
}

export default A3Container;
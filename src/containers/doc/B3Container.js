import axios from "axios";
import { useEffect, useState } from "react";
import B3Form from "../../components/doc/B3/B3Form";
import useStorage from "../../hooks/useStorage";

const B3Container = () => {
  const [units, setUnits] = useState([]);
  const { onWorkingSystem, onWorkingSystemChecked, onStorage, onKeyValueForm } = useStorage({
    H: {
      RCVNO: "",
      VESSELNM: "",
    },
    D1: {
      0: {
        Value: "",
        Unit: "대",
        Remark: "",
      },
      1: {
        Value: "",
        Unit: "대",
        Remark: "",
      },
      2: {
        Value: "",
        Unit: "대",
        Remark: "",
      },
      3: {
        Value: "",
        Unit: "대",
        Remark: "",
      },
      4: {
        Value: "",
        Unit: "대",
        Remark: "",
      },
      5: {
        Value: "",
        Unit: "대",
        Remark: "",
      },
    },
    D2: {
      0: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      1: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      2: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      3: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      4: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      5: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      6: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      7: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      8: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      9: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      10: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      11: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      12: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
    },
    D3: {
      0: "",
      1: "",
      2: "",
      3: "",
    }
  })
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/inspectionList/units`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`},
      });
      setUnits(res.data.units);
    })();
  }, []);
  return (
    <B3Form units={units} onWorkingSystem={onWorkingSystem} onWorkingSystemChecked={onWorkingSystemChecked} onKeyValueForm={onKeyValueForm} onStorage={onStorage}/>
  )
}

export default B3Container
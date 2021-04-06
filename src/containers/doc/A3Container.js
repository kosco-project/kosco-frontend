import axios from "axios";
import { useEffect, useState } from "react";
import A3Form from "../../components/doc/A3/A3Form";
import useStorage from "../../hooks/useStorage";

const A3Container = () => {
  const [units, setUnits] = useState([]);
  const { onWorkingSystem, onWorkingSystemChecked, onStorage } = useStorage({
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
      6: {
        Value: "",
        Unit: "대",
        Remark: "",
      },
      7: {
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
      13: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      14: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      15: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
      16: {
        CarriedOut: 0,
      },
      17: {
        CarriedOut: 0,
        NotCarried: 0,
        NotApplicable: 0,
        Comm: "",
      },
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
    <A3Form units={units} onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem} onStorage={onStorage}/>
  )
}

export default A3Container;
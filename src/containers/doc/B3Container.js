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
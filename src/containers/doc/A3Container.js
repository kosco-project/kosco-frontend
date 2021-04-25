import axios from "axios";
import { useEffect, useState } from "react";
import A3Form from "../../components/doc/A3/A3Form";
import useStorage from "../../hooks/useStorage";
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';

const A3Container = () => {
  const [units, setUnits] = useState([]);
  const { onWorkingSystem, onWorkingSystemChecked, onStorage, visible, showModal, commVisible, showCommModal, hideModal } = useStorage({
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
        Remark: "",
      },
      1: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      2: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      3: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      4: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      5: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      6: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      7: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      8: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      9: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      10: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      11: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      12: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      13: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      14: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      15: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
      },
      16: {
        CarriedOut: 0,
      },
      17: {
        CarriedOut: 0,
        NotCarried: 0,
        Remark: "",
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
    <>
      {visible && (
        <SaveModal form="A3" path="save" onStorage={onStorage} hideModal={hideModal}/>
      )}
      {commVisible && (
        <CompleteModal form="A3" path="complete" onStorage={onStorage} hideModal={hideModal}/>
      )}
      <A3Form
        units={units}
        onWorkingSystemChecked={onWorkingSystemChecked}
        onWorkingSystem={onWorkingSystem}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  )
}

export default A3Container;
const B1_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      GasType: '',
      SerialNo: '',
      TestDt: new Date(),
      TareWT: '',
      GrossWT: '',
      Capacity: '',
      Press: '',
      Temp: '',
      Perform: 'GOOD',
    },
    1: {
      GasType: '',
      SerialNo: '',
      TestDt: new Date(),
      TareWT: '',
      GrossWT: '',
      Capacity: '',
      Press: '',
      Temp: '',
      Perform: 'GOOD',
    },
    2: {
      GasType: '',
      SerialNo: '',
      TestDt: new Date(),
      TareWT: '',
      GrossWT: '',
      Capacity: '',
      Press: '',
      Temp: '',
      Perform: 'GOOD',
    },
    3: {
      GasType: '',
      SerialNo: '',
      TestDt: new Date(),
      TareWT: '',
      GrossWT: '',
      Capacity: '',
      Press: '',
      Temp: '',
      Perform: 'GOOD',
    },
  },
};

export default B1_INIT;
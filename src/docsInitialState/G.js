const G_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D2: {
    0: {
      Qty: '',
      SerialNo: '',
      Manuf: '',
      Type: '',
      Capacity: '',
      TestDt: new Date(),
      Perform: '',
    },
    1: {
      Qty: '',
      SerialNo: '',
      Manuf: '',
      Type: '',
      Capacity: '',
      TestDt: new Date(),
      Perform: '',
    },
    2: {
      Qty: '',
      SerialNo: '',
      Manuf: '',
      Type: '',
      Capacity: '',
      TestDt: new Date(),
      Perform: '',
    },
    3: {
      Qty: '',
      SerialNo: '',
      Manuf: '',
      Type: '',
      Capacity: '',
      TestDt: new Date(),
      Perform: '',
    },
  },
  D3: '',
};

export default G_INIT;

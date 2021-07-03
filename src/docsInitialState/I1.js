const I1_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      CylnType: '',
      Type: '',
      MFGDt: new Date(),
      SerialNo: '',
      Pressure: '',
      Perform: '',
    },
    1: {
      CylnType: '',
      Type: '',
      MFGDt: new Date(),
      SerialNo: '',
      Pressure: '',
      Perform: '',
    },
    2: {
      CylnType: '',
      Type: '',
      MFGDt: new Date(),
      SerialNo: '',
      Pressure: '',
      Perform: '',
    },
    3: {
      CylnType: '',
      Type: '',
      MFGDt: new Date(),
      SerialNo: '',
      Pressure: '',
      Perform: '',
    },
  },
  D2: '',
};

export default I1_INIT;

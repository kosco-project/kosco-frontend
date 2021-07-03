const H2_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      CylnType: '',
      Volume: '',
      WorkPress: '',
      SerialNo: '',
      TestDt: new Date(),
      Perform: '',
    },
    1: {
      CylnType: '',
      Volume: '',
      WorkPress: '',
      SerialNo: '',
      TestDt: new Date(),
      Perform: '',
    },
    2: {
      CylnType: '',
      Volume: '',
      WorkPress: '',
      SerialNo: '',
      TestDt: new Date(),
      Perform: '',
    },
    3: {
      CylnType: '',
      Volume: '',
      WorkPress: '',
      SerialNo: '',
      TestDt: new Date(),
      Perform: '',
    },
  },
  D2: '',
};

export default H2_INIT;

const I_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      SerNo: '',
      ManufType: '',
      ManufDt: new Date(),
    },
    1: {
      SerNo: '',
      ManufType: '',
      ManufDt: new Date(),
    },
    2: {
      SerNo: '',
      ManufType: '',
      ManufDt: new Date(),
    },
    3: {
      SerNo: '',
      ManufType: '',
      ManufDt: new Date(),
    },
  },
  D2: {
    0: '',
    1: '',
  },
  D3: {
    0: {
      Normal: 1,
      Abnormal: 0,
    },
    1: {
      Normal: 1,
      Abnormal: 0,
    },
    2: {
      Normal: 1,
      Abnormal: 0,
    },
    3: {
      Normal: 1,
      Abnormal: 0,
    },
    4: {
      Normal: 1,
      Abnormal: 0,
    },
    5: {
      Normal: 1,
      Abnormal: 0,
    },
    6: {
      Normal: 1,
      Abnormal: 0,
    },
    7: {
      Normal: 1,
      Abnormal: 0,
    },
    8: {
      Normal: 1,
      Abnormal: 0,
    },
    9: {
      Normal: 1,
      Abnormal: 0,
    },
    10: {
      Normal: 1,
      Abnormal: 0,
    },
  },
};

export default I_INIT;

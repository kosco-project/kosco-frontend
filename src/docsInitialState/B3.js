const B3_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      Value: '',
      Unit: '대',
      Remark: '',
    },
    1: {
      Value: '',
      Unit: '대',
      Remark: '',
    },
    2: {
      Value: '',
      Unit: '대',
      Remark: '',
    },
    3: {
      Value: '',
      Unit: '대',
      Remark: '',
    },
    4: {
      Value: '',
      Unit: '대',
      Remark: '',
    },
    5: {
      Value: '',
      Unit: '대',
      Remark: '',
    },
  },
  D2: {
    0: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    1: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    2: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    3: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    4: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    5: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    6: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    7: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    8: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    9: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    10: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    11: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    12: {
      CarriedOut: 0,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
  },
  D3: {
    0: '',
    1: '',
    2: '',
    3: '',
  },
};

export default B3_INIT;

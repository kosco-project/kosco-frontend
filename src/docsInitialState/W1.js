export const W1_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: '',
    1: '',
    2: '',
    3: '',
  },
  D2: {
    0: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    1: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    2: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    3: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    4: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    5: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    6: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    7: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    8: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    9: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
    10: {
      CarriedOut: 1,
      NotCarried: 0,
      NotApp: 0,
      Comm: '',
    },
  },
};

export const W1_D1_DATAS = [
  'MAKER',
  'NUMER OF DISCHARGE NOZZLE',
  'TYPE OF DETECTOR',
  'COVERING',
];

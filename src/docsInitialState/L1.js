import moment from 'moment';

const L1_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D2: {
    0: {
      DESCT: 'Location',
      Value1: '',
      Value2: '',
      Value3: '',
      Value4: '',
    },
    1: {
      DESCT: 'Capacity / Quantity',
      Value1: '',
      Value2: '',
      Value3: '',
      Value4: '',
    },
    2: {
      DESCT: 'Expiry Date',
      Value1: moment().format('yyyy-MM'),
      Value2: moment().format('yyyy-MM'),
      Value3: moment().format('yyyy-MM'),
      Value4: moment().format('yyyy-MM'),
    },
  },
};

export default L1_INIT;

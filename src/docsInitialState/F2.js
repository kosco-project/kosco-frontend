const F2_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      manuf: '',
      type: '',
      s_no: '',
      remark: 'GOOD',
    },
    1: {
      manuf: '',
      type: '',
      s_no: '',
      remark: 'GOOD',
    },
    2: {
      manuf: '',
      type: '',
      s_no: '',
      remark: 'GOOD',
    },
    3: {
      manuf: '',
      type: '',
      s_no: '',
      remark: 'GOOD',
    },
  },
  D2: {
    confirm: '0',
    f_pressure: '',
    f_depth: '',
    expiry_date: new Date(),
    value1: '',
    value2: '',
    recommend: '',
  },
};

export default F2_INIT;

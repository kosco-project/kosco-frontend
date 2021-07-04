const F_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      s_no: '',
      position: '',
      condition: 'GOOD',
      remark: '',
    },
    1: {
      s_no: '',
      position: '',
      condition: 'GOOD',
      remark: '',
    },
    2: {
      s_no: '',
      position: '',
      condition: 'GOOD',
      remark: '',
    },
    3: {
      s_no: '',
      position: '',
      condition: 'GOOD',
      remark: '',
    },
  },
  D2: '',
};

export default F_INIT;

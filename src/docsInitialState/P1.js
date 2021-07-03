const P1_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      ProductType: '',
      Qty: '',
      Size: '',
      Perform: 'Good',
    },
  },
  D2: '',
};

export default P1_INIT;

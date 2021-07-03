export const OX2_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      SetNo1: 1,
      SetNo2: 1,
      SetNo3: 1,
      SetNo4: 1,
      SetNo5: 1,
      SetNo6: 1,
      SetNo7: 1,
    },
  },
  D2: {
    0: {
      Manuf: '',
      Volume: '',
      WorkPress: '',
      TestDt: new Date(),
      SerialNo: '',
      Perform: '',
    },
  },
  D3: '',
};

export const OX2_D1_DATAS = [
  'MASKS CHECKED',
  'BREATHING VALVE CHECKED',
  'PRESSURE REGULATOR CHECKED',
  'SUPPLY HOSE CONNECTION CHECKED',
  'OXYGEN INHALER CHECKED',
  'DEVICE WHIT FUNCTION TEST',
  'SERVICE LABEL PUT ON DEVICE',
  'DELETE',
];

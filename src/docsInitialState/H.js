export const H_INIT = {
  H: {
    RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
    VESSELNM: JSON.parse(localStorage.getItem('shipNm')) || '',
    CERTNO: JSON.parse(localStorage.getItem('certNo')) || '',
  },
  D1: {
    0: {
      ins1: 1,
      ins2: 1,
      ins3: 1,
      ins4: 1,
      ins5: 1,
      ins6: 1,
      ins7: 1,
      ins8: 1,
    },
  },
  D2: {
    0: {
      Manuf: '',
      Type: '',
      SerialNo: '',
      Remark: 'GOOD',
    },
  },
  D3: '',
};

export const H_D1_DATAS = [
  'FACE MASK CHECKED',
  'BREATHING VALVE CHECKED',
  'REGULATOR UNIT CHECKED',
  'HARNESS CHECKED',
  'DEVICE WITH FUNCTION TEST',
  'SERVICE LABEL PUT ON DEVICE',
  'CYLINDER INSPECTED AS PER ENCLOSED SERVICE CHART H2.',
  'DELETE',
];

export const H3_D1_DATAS = [
  'MASKS CHECKED',
  'BREATHING VALVE CHECKED',
  'PRESSURE REGULATOR CHECKED',
  'SUPPLY HOSE CONNECTION CHECKED',
  'OXYGEN INHALER CHECKED',
  'DEVICE WHIT FUNCTION TEST',
  'SERVICE LABEL PUT ON DEVICE',
  'DELETE',
];

export const H31_D1_DATAS = [
  'FACE MASK CHECKED',
  'BREATHING VALVE CHECKED',
  'REGULATOR UNIT CHECKED',
  'HARNESS CHECKED',
  'FUNCTION TEST WITH TEST EQUIPMENT',
  'SERVICE LABEL PUT ON EQUIPMENT',
  'CYLINDER INSPECTED AS PER ENCLOSED SERVICE CHART H4.',
  'DELETE',
];

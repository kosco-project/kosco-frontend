import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'i/CHANGE_FIELD';
const CHANGE_FIELD_D2 = 'i/CHANGE_FIELD_D2';
const CHECKBOX = 'i/CHECKBOX';
const ADD_INITIALSTATE = 'i/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'i/DELETE_INITIALSTATE';
const STORAGE = 'i/STORAGE';
const GET_I_DATA = 'i/GET_I_DATA';
const GET_I_H = 'i/GET_I_H';
const I_INITIALIZE = 'i/INITIALIZE';

// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeFieldD2 = createAction(CHANGE_FIELD_D2);
export const checkBox = createAction(CHECKBOX);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const storage = createAction(STORAGE);
export const getIdata = createAction(GET_I_DATA);
export const getIh = createAction(GET_I_H);
export const iInitialize = createAction(I_INITIALIZE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
    CERTNO: '',
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

// REDUCER
const iReducer = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { id, name, value } }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            ...state.D1[id],
            [name]: value,
          },
        },
      };
    },
    [CHANGE_FIELD_D2]: (state, { payload: { name, value } }) => {
      return {
        ...state,
        D2: {
          ...state.D2,
          [name]: value,
        },
      };
    },

    [CHECKBOX]: (state, { payload: { name, key } }) => {
      return {
        ...state,
        D3: {
          ...state.D3,
          [name]: {
            Normal: key === 'Normal' ? 1 : 0,
            Abnormal: key === 'Abnormal' ? 1 : 0,
          },
        },
      };
    },
    [ADD_INITIALSTATE]: (state, { payload: id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            SerNo: '',
            ManufType: '',
            ManufDt: new Date(),
          },
        },
      };
    },

    [DELETE_INITIALSTATE]: (state, { payload: id }) => {
      console.log(id);
      delete state.D1[id];
      return { ...state, D1: state.D1 };
    },

    [STORAGE]: (state, { payload: { RCVNO, VESSELNM } }) => {
      return {
        ...state,
        H: {
          ...state.H,
          RCVNO,
          VESSELNM,
        },
      };
    },
    [GET_I_DATA]: (state, { payload: { D1, D2, D3 } }) => {
      return {
        ...state,
        D1,
        D2,
        D3,
      };
    },
    [GET_I_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
    [I_INITIALIZE]: () => initialState,
  },
  initialState
);

export default iReducer;

import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'i1/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'i1/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'i1/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'i1/DELETE_INITIALSTATE';
const STORAGE = 'i1/STORAGE';
const GET_I1_DATA = 'i1/GET_I1_DATA';
const GET_I1_H = 'i1/GET_I1_H';
const I1_INITIALIZE = 'i1/INITIALIZE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const storage = createAction(STORAGE);
export const getI1data = createAction(GET_I1_DATA);
export const getI1h = createAction(GET_I1_H);
export const i1Initialize = createAction(I1_INITIALIZE);

//  INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
  },
  D1: {
    0: {
      CylnType: '',
      Type: '',
      MFGDt: new Date(),
      SerialNo: '',
      Pressure: '',
      Perform: '',
    },
    1: {
      CylnType: '',
      Type: '',
      MFGDt: new Date(),
      SerialNo: '',
      Pressure: '',
      Perform: '',
    },
    2: {
      CylnType: '',
      Type: '',
      MFGDt: new Date(),
      SerialNo: '',
      Pressure: '',
      Perform: '',
    },
    3: {
      CylnType: '',
      Type: '',
      MFGDt: new Date(),
      SerialNo: '',
      Pressure: '',
      Perform: '',
    },
  },
  D2: '',
};

// REDUCER
const i1Reducer = handleActions(
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

    [CHANGE_TEXT_AREA]: (state, { payload: value }) => {
      return {
        ...state,
        D2: value,
      };
    },

    [ADD_INITIALSTATE]: (state, { payload: id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            CylnType: '',
            Type: '',
            MFGDt: new Date(),
            SerialNo: '',
            Pressure: '',
            Perform: '',
          },
        },
      };
    },

    [DELETE_INITIALSTATE]: (state, { payload: id }) => {
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
    [GET_I1_DATA]: (state, { payload: { D1, D2 } }) => {
      return {
        ...state,
        D1,
        D2,
      };
    },
    [GET_I1_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
    [I1_INITIALIZE]: () => initialState,
  },
  initialState
);

export default i1Reducer;

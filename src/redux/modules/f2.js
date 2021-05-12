import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'f2/CHANGE_FIELD';
const CHANGE_FIELD_D2 = 'f2/CHANGE_FIELD_D2';
const CHECKBOX = 'f2/CHECKBOX';
const ADD_INITIALSTATE = 'f2/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'f2/DELETE_INITIALSTATE';
const STORAGE = 'f2/STORAGE';
const GET_F2_H = 'f2/GET_F2_H';
const GET_F2_DATA = 'f2/GET_F2_DATA';
const F2_INITIALIZE = 'f2/F2_INITIALIZE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeFieldD2 = createAction(CHANGE_FIELD_D2);
export const checkBox = createAction(CHECKBOX);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const storage = createAction(STORAGE);
export const getF2H = createAction(GET_F2_H);
export const getF2Data = createAction(GET_F2_DATA);
export const f2Initailize = createAction(F2_INITIALIZE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
    CERTNO: '',
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

// REDUCER
const fReducer = handleActions(
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
    [CHECKBOX]: (state, { payload: { value } }) => {
      return {
        ...state,
        D2: {
          ...state.D2,
          confirm: value,
        },
      };
    },
    [ADD_INITIALSTATE]: (state, { payload: id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            ...state.D1.id,
            manuf: '',
            type: '',
            s_no: '',
            remark: 'GOOD',
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
    [GET_F2_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
    [GET_F2_DATA]: (state, { payload: { D1, D2 } }) => {
      return {
        ...state,
        D1,
        D2: D2[0],
      };
    },
    [F2_INITIALIZE]: () => initialState,
  },
  initialState
);

export default fReducer;

import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'f/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'f/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'f/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'f/DELETE_INITIALSTATE';
const STORAGE = 'f/STORAGE';
const GET_F_DATA = 'f/GET_F_DATA';
const GET_F_H = 'f/GET_F_H';
const F_INITIALIZE = 'f/INITIALIZE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const storage = createAction(STORAGE);
export const getFdata = createAction(GET_F_DATA);
export const getFh = createAction(GET_F_H);
export const fInitialize = createAction(F_INITIALIZE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
    CERTNO: '',
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
            ...state.D1.id,
            s_no: '',
            position: '',
            condition: '',
            remark: '',
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
    [GET_F_DATA]: (state, { payload: { D1, D2 } }) => {
      return {
        ...state,
        D1,
        D2,
      };
    },
    [GET_F_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
    [F_INITIALIZE]: () => initialState,
  },
  initialState
);

export default fReducer;

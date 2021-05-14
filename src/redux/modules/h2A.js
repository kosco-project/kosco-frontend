// H2, H2-A, H4, H4-1 컴포넌트에서 사용

import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'h2A/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'h2A/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'h2A/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'h2A/DELETE_INITIALSTATE';
const GET_H2A_H = 'h2A/GET_H2A_H';
const GET_H2A_DATA = 'h2A/GET_H2A_DATA';
const H2A_INITIALIZE = 'h2A/H2A_INITIALIZE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const getH2A_H = createAction(GET_H2A_H);
export const getH2AData = createAction(GET_H2A_DATA);
export const h2AInitialize = createAction(H2A_INITIALIZE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
    CERTNO: '',
  },
  D1: {
    0: {
      CylnType: '',
      Volume: '',
      WorkPress: '',
      SerialNo: '',
      TestDt: new Date(),
      Perform: 'GOOD',
    },
    1: {
      CylnType: '',
      Volume: '',
      WorkPress: '',
      SerialNo: '',
      TestDt: new Date(),
      Perform: 'GOOD',
    },
    2: {
      CylnType: '',
      Volume: '',
      WorkPress: '',
      SerialNo: '',
      TestDt: new Date(),
      Perform: 'GOOD',
    },
    3: {
      CylnType: '',
      Volume: '',
      WorkPress: '',
      SerialNo: '',
      TestDt: new Date(),
      Perform: 'GOOD',
    },
  },
  D2: '',
};

// REDUCER
const H2AReducer = handleActions(
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
            CylnType: '',
            Volume: '',
            WorkPress: '',
            SerialNo: '',
            TestDt: new Date(),
            Perform: '',
          },
        },
      };
    },

    [DELETE_INITIALSTATE]: (state, { payload: id }) => {
      delete state.D1[id];
      return { ...state, D1: state.D1 };
    },
    [GET_H2A_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
    [GET_H2A_DATA]: (state, { payload: { D1, D2, D3 } }) => {
      return {
        ...state,
        D1,
        D2,
        D3,
      };
    },
    [H2A_INITIALIZE]: () => initialState,
  },
  initialState
);

export default H2AReducer;

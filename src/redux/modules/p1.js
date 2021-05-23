import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'p1/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'p1/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'p1/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'p1/DELETE_INITIALSTATE';
const GET_P1_H = 'p1/GET_P1_H';
const GET_P1_DATA = 'p1/GET_P1_DATA';
const P1_INITIALIZE = 'p1/P1_INITIALIZE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const getP1h = createAction(GET_P1_H);
export const getP1data = createAction(GET_P1_DATA);
export const p1Initialize = createAction(P1_INITIALIZE);

//  INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
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

// REDUCER
const p1Reducer = handleActions(
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
            ProductType: '',
            Qty: '',
            Size: '',
            Perform: 'Good',
          },
        },
      };
    },
    [DELETE_INITIALSTATE]: (state, { payload: id }) => {
      delete state.D1[id];
      return { ...state, D1: state.D1 };
    },
    [GET_P1_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
    [GET_P1_DATA]: (state, { payload: { D1, D2 } }) => {
      return {
        ...state,
        D1,
        D2,
      };
    },
    [P1_INITIALIZE]: () => initialState,
  },
  initialState
);

export default p1Reducer;

import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'b1/CHANGE_FIELD';
const B1_INITIALIZE = 'b1/B1_INITIALIZE';
const ADD_INITIALSTATE = 'b1/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'b1/DELETE_INITIALSTATE';
const GET_B1_DATA = 'b1/GET_B1_DATA';
const GET_B1_H = 'b1/GET_B1_H';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const b1Initialize = createAction(B1_INITIALIZE);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const getB1Data = createAction(GET_B1_DATA);
export const getB1H = createAction(GET_B1_H);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
    CERTNO: '',
  },
  D1: {
    0: {
      GasType: '',
      SerialNo: '',
      TestDt: new Date(),
      TareWT: '',
      GrossWT: '',
      Capacity: '',
      Press: '',
      Temp: '',
      Perform: 'GOOD',
    },
    1: {
      GasType: '',
      SerialNo: '',
      TestDt: new Date(),
      TareWT: '',
      GrossWT: '',
      Capacity: '',
      Press: '',
      Temp: '',
      Perform: 'GOOD',
    },
    2: {
      GasType: '',
      SerialNo: '',
      TestDt: new Date(),
      TareWT: '',
      GrossWT: '',
      Capacity: '',
      Press: '',
      Temp: '',
      Perform: 'GOOD',
    },
    3: {
      GasType: '',
      SerialNo: '',
      TestDt: new Date(),
      TareWT: '',
      GrossWT: '',
      Capacity: '',
      Press: '',
      Temp: '',
      Perform: 'GOOD',
    },
  },
};

// REDUCER
const b1Reducer = handleActions(
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
    [B1_INITIALIZE]: () => initialState,
    [ADD_INITIALSTATE]: (state, { payload: id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: initialState.D1[0],
        },
      };
    },
    [DELETE_INITIALSTATE]: (state, { payload: id }) => {
      delete state.D1[id];
      return { ...state, D1: state.D1 };
    },
    [GET_B1_DATA]: (state, { payload: { D1 } }) => {
      return {
        ...state,
        D1,
      };
    },
    [GET_B1_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
  },
  initialState
);

export default b1Reducer;

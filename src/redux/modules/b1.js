import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'b1/CHANGE_FIELD';
const ADD_INITIALSTATE = 'b1/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'b1/DELETE_INITIALSTATE';
const TEMPORARY_STORAGE = 'b1/TEMPORARY_STORAGE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const temporaryStorage = createAction(TEMPORARY_STORAGE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: "",
    VESSELNM: "",
  },
  D1: {
    0: {
      GasType: "",
      SerialNo: "",
      TestDt: new Date(),
      TareWT: "",
      GrossWT: "",
      Capacity: "",
      Press: "",
      Temp: "",
      Perform: "",
    },
    1: {
      GasType: "",
      SerialNo: "",
      TestDt: new Date(),
      TareWT: "",
      GrossWT: "",
      Capacity: "",
      Press: "",
      Temp: "",
      Perform: "",
    },
    2: {
      GasType: "",
      SerialNo: "",
      TestDt: new Date(),
      TareWT: "",
      GrossWT: "",
      Capacity: "",
      Press: "",
      Temp: "",
      Perform: "",
    },
    3: {
      GasType: "",
      SerialNo: "",
      TestDt: new Date(),
      TareWT: "",
      GrossWT: "",
      Capacity: "",
      Press: "",
      Temp: "",
      Perform: "",
    }, 
  }
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
        }
      }
    },
    [ADD_INITIALSTATE]: (state, { payload : id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            ...state.D1.id,
            GasType: "",
            SerialNo: "",
            TestDt: new Date(),
            TareWT: "",
            GrossWT: "",
            Capacity: "",
            Press: "",
            Temp: "",
            Perform: "",
          },
        }
      }
    },
    [DELETE_INITIALSTATE]: (state, { payload: { id } }) => {
      const { [id]: value, ...restItems } = state.D1;
      return {
        ...state,
        D1: restItems,
      }
    },
    [TEMPORARY_STORAGE]: (state, { payload : { RCVNO, VESSELNM } }) => {
      return {
        ...state,
        H: {
          ...state.H,
          RCVNO,
          VESSELNM,
        }
      }
    }
  },
  initialState
);


export default b1Reducer;

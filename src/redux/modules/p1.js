import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'p1/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'p1/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'p1/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'p1/DELETE_INITIALSTATE';
const STORAGE = 'p1/STORAGE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const storage = createAction(STORAGE);

//  INITIAL STATE 
const initialState = {
  H: {
    RCVNO: "",
    VESSELNM: ""
  },
  D1: {
     0: {
       ProductType: "",
       Qty: "",
       Size: "",
       Perform: "Good",
     },
  },
  D2: "",
}


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
        }
      }
    },
    
    [CHANGE_TEXT_AREA]: (state, { payload: value }) => {
      return {
        ...state,
        D2: value,
      }
    },

    [ADD_INITIALSTATE]: (state, { payload: id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            ProductType: "",
            Qty: "",
            Size: "",
            Perform: "Good",
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
    [STORAGE]: (state, { payload: { RCVNO, VESSELNM } }) => {
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

export default p1Reducer;
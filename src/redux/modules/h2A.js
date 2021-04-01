import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'h2A/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'h2A/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'h2A/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'h2A/DELETE_INITIALSTATE';
const STORAGE = 'h2A/STORAGE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const storage = createAction(STORAGE);

// INITIAL STATE
export const initialState = {
  H: {
    RCVNO: "",
    VESSELNM: "",
  },
  D1: {
    0: {
      CylnType: "",
      Volume: "",
      WorkPress: "",
      SerialNo: "",
      TestDt:new Date(),
      Perform: ""
    },
    1: {
      CylnType: "",
      Volume: "",
      WorkPress: "",
      SerialNo: "",
      TestDt:new Date(),
      Perform: ""
    },
    2: {
      CylnType: "",
      Volume: "",
      WorkPress: "",
      SerialNo: "",
      TestDt:new Date(),
      Perform: ""
    },
    3: {
      CylnType: "",
      Volume: "",
      WorkPress: "",
      SerialNo: "",
      TestDt:new Date(),
      Perform: ""
    },
  },
  D2: "",
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
        }
      }
    },
    [CHANGE_TEXT_AREA]: (state, { payload: value }) => {
      return {
        ...state,
        D2: value,
      }
    },

    [ADD_INITIALSTATE]: (state, { payload : id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            ...state.D1.id,
            CylnType: "",
            Volume: "",
            WorkPress: "",
            SerialNo: "",
            TestDt:new Date(),
            Perform: ""
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
    },
  },
  initialState
);


export default H2AReducer;

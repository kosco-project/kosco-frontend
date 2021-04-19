import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'f2/CHANGE_FIELD';
const CHANGE_FIELD_D2 = 'f2/CHANGE_FIELD_D2';
const CHECKBOX = 'f2/CHECKBOX';
const ADD_INITIALSTATE = 'f2/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'f2/DELETE_INITIALSTATE';
const STORAGE = 'f2/STORAGE';
// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeFieldD2 = createAction(CHANGE_FIELD_D2);
export const checkBox = createAction(CHECKBOX);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const storage = createAction(STORAGE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: "",
    VESSELNM: "",
  },
  D1: {
    0: {
      manuf: "",
      type: "",
      s_no: "",
      remark: "GOOD",
    },
    1: {
      manuf: "",
      type: "",
      s_no: "",
      remark: "GOOD",
    },
    2: {
      manuf: "",
      type: "",
      s_no: "",
      remark: "GOOD",
    },
    3: {
      manuf: "",
      type: "",
      s_no: "",
      remark: "GOOD",
    },
  },
  D2: {
    confirm: "0",
    f_pressure: "",
    f_depth: "",
    expiry_date: new Date(),
    value1: "",
    value2: "",
    recommend: "",
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
        }
      }
    },
    [CHANGE_FIELD_D2]: (state, { payload: { name, value } }) => {
      return {
        ...state,
        D2: {
          ...state.D2,
          [name]: value,
        }
      }
    },
    [CHECKBOX]: (state, { payload: { value } }) => {
      return {
        ...state,
        D2: {
          ...state.D2,
          confirm: value,
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
            manuf: "",
            type: "",
            s_no: "",
            remark: "GOOD",
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
    [STORAGE]: (state, { payload : { RCVNO, VESSELNM } }) => {
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


export default fReducer;

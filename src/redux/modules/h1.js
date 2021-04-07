import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD_D1 = 'h1/CHANGE_FIELD_D1';
const CHANGE_FIELD = 'h1/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'h1/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'h1/ADD_INITIALSTATE';
const ADD_INITIALSTATE_D2 = 'h1/ADD_INITIALSTATE_D2';
const DELETE_INITIALSTATE = 'h1/DELETE_INITIALSTATE';
const DELETE_INITIALSTATE_D2 = 'h1/DELETE_INITIALSTATE_D2';
const STORAGE = 'h1/TEMPORARY_STORAGE';

// CREATE ACTION
export const changeFieldD1 = createAction(CHANGE_FIELD_D1);
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const addInitialStateD2 = createAction(ADD_INITIALSTATE_D2);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const deleteInitialStateD2 = createAction(DELETE_INITIALSTATE_D2);
export const storage = createAction(STORAGE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: "",
    VESSELNM: "",
  },
  D1: {
    0: {
      ins1: "",
      ins2: 1,
      ins3: 1,
      ins4: 1,
      ins5: 1,
      ins6: 1,
      ins7: 1,
      ins8: 1,
    },
  },
  D2: {
    0: {
      Manuf: "",
      Type: "",
      SerialNo: "",
      Remark: "GOOD",
    },
  },
  D3: "",
};

// REDUCER
const h1Reducer = handleActions(
  {

    [CHANGE_FIELD_D1]: (state, { payload: { id, name, checked } }) => {
      if (checked) {
        return {
          ...state,
          D1: {
            ...state.D1,
            [id]: {
              ...state.D1[id],
              [name]: 1,
            }
          }
        }
      }
      if (!checked) {
        return {
          ...state,
          D1: {
            ...state.D1,
            [id]: {
              ...state.D1[id],
              [name]: 0,
            }
          }
        }
      }
    },
    [CHANGE_FIELD]: (state, { payload: { id, name, value, dataset } }) => {
      return {
        ...state,
        [dataset.form]: {
         ...state[dataset.form],
          [id]: {
            ...state[dataset.form][id],
            [name]: value,
          },
        }
      }
    },
    [CHANGE_TEXT_AREA]: (state, { payload: value }) => {
      return {
        ...state,
        D3: value,
      }
    },
    [ADD_INITIALSTATE]: (state, { payload : id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            ...state.D1.id,
            ins1: "",
            ins2: 1,
            ins3: 1,
            ins4: 1,
            ins5: 1,
            ins6: 1,
            ins7: 1,
            ins8: 1,
          },
        }
      }
    },
    [ADD_INITIALSTATE_D2]: (state, { payload: id }) => {
      return {
        ...state,
        D2: {
          ...state.D2,
          [id]: {
            ...state.D2.id,
            Manuf: "",
            Type: "",
            SerialNo: "",
            Remark: "",
          }
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
    [DELETE_INITIALSTATE_D2]: (state, { payload: { id } }) => {
      const { [id]: value, ...restItems } = state.D2;
      return {
        ...state,
        D2: restItems,
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


export default h1Reducer;

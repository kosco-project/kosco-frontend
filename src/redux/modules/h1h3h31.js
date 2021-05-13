import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD_D1 = 'h3/CHANGE_FIELD_D1';
const CHANGE_FIELD = 'h3/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'h3/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'h3/ADD_INITIALSTATE';
const ADD_INITIALSTATE_D2 = 'h3/ADD_INITIALSTATE_D2';
const DELETE_INITIALSTATE = 'h3/DELETE_INITIALSTATE';
const DELETE_INITIALSTATE_D2 = 'h3/DELETE_INITIALSTATE_D2';
const GET_H1H3_H = 'h3/GET_H1H3_H';
const GET_H1H3_DATA = 'h3/GET_H1H3_DATA';
const H1H3_INITIALIZE = 'h3/H1H3_INITIALIZE';

// CREATE ACTION
export const changeFieldD1 = createAction(CHANGE_FIELD_D1);
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const addInitialStateD2 = createAction(ADD_INITIALSTATE_D2);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const deleteInitialStateD2 = createAction(DELETE_INITIALSTATE_D2);
export const getH1H3H = createAction(GET_H1H3_H);
export const getH1H3Data = createAction(GET_H1H3_DATA);
export const h1h3Initialize = createAction(H1H3_INITIALIZE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
    CERTNO: '',
  },
  D1: {
    0: {
      ins1: 1,
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
      Manuf: '',
      Type: '',
      SerialNo: '',
      Remark: 'GOOD',
    },
  },
  D3: '',
};

// REDUCER
const h3Reducer = handleActions(
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
            },
          },
        };
      }
      if (!checked) {
        return {
          ...state,
          D1: {
            ...state.D1,
            [id]: {
              ...state.D1[id],
              [name]: 0,
            },
          },
        };
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
        },
      };
    },
    [CHANGE_TEXT_AREA]: (state, { payload: value }) => {
      return {
        ...state,
        D3: value,
      };
    },
    [ADD_INITIALSTATE]: (state, { payload: id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            ...state.D1.id,
            ins1: 1,
            ins2: 1,
            ins3: 1,
            ins4: 1,
            ins5: 1,
            ins6: 1,
            ins7: 1,
          },
        },
      };
    },
    [ADD_INITIALSTATE_D2]: (state, { payload: id }) => {
      return {
        ...state,
        D2: {
          ...state.D2,
          [id]: {
            ...state.D2.id,
            Manuf: '',
            Type: '',
            SerialNo: '',
            Remark: 'GOOD',
          },
        },
      };
    },
    [DELETE_INITIALSTATE]: (state, { payload: id }) => {
      delete state.D1[id];
      return { ...state, D1: state.D1 };
    },
    [DELETE_INITIALSTATE_D2]: (state, { payload: id }) => {
      delete state.D2[id];
      return { ...state, D2: state.D2 };
    },
    [GET_H1H3_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
    [GET_H1H3_DATA]: (state, { payload: { D1, D2, D3 } }) => {
      return {
        ...state,
        D1,
        D2,
        D3,
      };
    },
    [H1H3_INITIALIZE]: () => initialState,
  },
  initialState
);

export default h3Reducer;

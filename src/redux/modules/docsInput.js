import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// ACTION TYPE
const INITIALIZE = 'docs/DOCS_INITIALIZE';
const CHANGE_A_D1 = 'docs/CHANGE_A_D1';
const CHANGE_FIELD = 'docs/CHANGE_FIELD';
const ADD_INITIALSTATE = 'docs/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'docs/DELETE_INITIALSTATE';
const GET_DOCS_DATA = 'docs/GET_DOCS_DATA';

// CREATE ACTION
export const changeA_D1 = createAction(CHANGE_A_D1);
export const changeField = createAction(CHANGE_FIELD);
export const initialize = createAction(INITIALIZE);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const getDocsData = createAction(GET_DOCS_DATA);

// INITIAL STATE
const initialState = {};

// REDUCER
const docsInput = handleActions(
  {
    [INITIALIZE]: (_, { payload: datas }) => {
      return { ...datas };
    },

    [CHANGE_A_D1]: (state, { payload: { form, name, value } }) =>
      produce(state, draft => {
        draft[form][name] = value;
      }),

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
    [GET_DOCS_DATA]: (state, { payload: { D1 } }) => {
      return {
        ...state,
        D1,
      };
    },
  },
  initialState
);

export default docsInput;

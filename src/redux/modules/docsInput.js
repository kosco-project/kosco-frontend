import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// ACTION TYPE
const INITIALIZE = 'docs/DOCS_INITIALIZE';
const CHANGE_D1 = 'docs/CHANGE_D1';
const CHANGE_CHECKBOX = 'docs/CHANGE_CHECKBOX';
const CHANGE_FIELD = 'docs/CHANGE_FIELD';
const ADD_LIST = 'docs/ADD_LIST';
const DELETE_LIST = 'docs/DELETE_LIST';
const RESET_INITIALSTATE = 'docs/RESET_INITIALSTATE';
const GET_DOCS_DATA = 'docs/GET_DOCS_DATA';

// CREATE ACTION
export const initialize = createAction(INITIALIZE);
export const change_D1 = createAction(CHANGE_D1);
export const change_checkbox = createAction(CHANGE_CHECKBOX);
export const changeField = createAction(CHANGE_FIELD);
export const addList = createAction(ADD_LIST);
export const deleteList = createAction(DELETE_LIST);
export const resetInitialState = createAction(RESET_INITIALSTATE);
export const getDocsData = createAction(GET_DOCS_DATA);

// INITIAL STATE
const initialState = {};

// REDUCER
const docsInput = handleActions(
  {
    [INITIALIZE]: (_, { payload: datas }) => {
      return { ...datas };
    },

    [CHANGE_D1]: (state, { payload: { form, name, value, key } }) =>
      produce(state, draft => {
        if (!name) draft[form] = value;
        else if (!key) draft[form][name] = value;
        else draft[form][name][key] = value;
      }),

    [CHANGE_CHECKBOX]: (state, { payload: { form, name, checked, key } }) => {
      return produce(state, draft => {
        if (!key) draft[form][name] = +checked;

        if (key && !checked) draft[form][name][key] = 0;

        if (key === 'CarriedOut' && checked) {
          draft[form][name].CarriedOut = 1;
          draft[form][name].NotCarried = 0;
          draft[form][name].NotApp && (draft[form][name].NotApp = 0);
        }
        if (key === 'NotCarried' && checked) {
          draft[form][name][key] = 1;
          draft[form][name].CarriedOut = 0;
          draft[form][name].NotApp && (draft[form][name].NotApp = 0);
        }

        if (key === 'NotApp' && checked) {
          draft[form][name][key] = 1;
          draft[form][name].CarriedOut = 0;
          draft[form][name].NotCarried = 0;
        }
      });
    },

    [ADD_LIST]: (state, { payload: { form, initState } }) => {
      const id =
        +Object.keys(state[form])[Object.keys(state[form]).length - 1] + 1;

      return produce(state, draft => {
        draft[form][id] = initState;
      });
    },

    [DELETE_LIST]: (state, { payload: { form, id } }) => {
      return produce(state, draft => {
        delete draft[form][id];
      });
    },

    [RESET_INITIALSTATE]: () => initialState,
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

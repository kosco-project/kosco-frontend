import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD_D1 = 'ox2/CHANGE_FIELD_D1';
const CHANGE_FIELD = 'ox2/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'ox2/CHANGE_TEXT_AREA';
const CHANGE_DATE_PICKER = 'ox2/CHANGE_DATE_PICKER';
const ADD_INITIALSTATE = 'ox2/ADD_INITIALSTATE';
const ADD_INITIALSTATE_D2 = 'ox2/ADD_INITIALSTATE_D2';
const DELETE_INITIALSTATE = 'ox2/DELETE_INITIALSTATE';
const DELETE_INITIALSTATE_D2 = 'ox2/DELETE_INITIALSTATE_D2';
const STORAGE = 'ox2/TEMPORARY_STORAGE';

// CREATE ACTION
export const changeFieldD1 = createAction(CHANGE_FIELD_D1);
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const changeDatePicker = createAction(CHANGE_DATE_PICKER);
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
      SetNo1:1,
      SetNo2: 1,
      SetNo3: 1,
      SetNo4: 1,
      SetNo5: 1,
      SetNo6: 1,
      SetNo7: 1,
    },
  },
  D2: {
    0: { 
      Manuf:"",
      Volume: "",
      WorkPress: "",
      TestDt: new Date(),
      SerialNo: "",
      Perform: "",
    },
  },
  D3 : "",
}

// REDUCER
const ox2Reducer = handleActions(
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
    [CHANGE_DATE_PICKER]: (state, { payload: { id, name, value, form } }) => {
      return {
        ...state,
        [form]: {
         ...state[form],
          [id]: {
            ...state[form][id],
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
            SetNo1: 1,
            SetNo2: 1,
            SetNo3: 1,
            SetNo4: 1,
            SetNo5: 1,
            SetNo6: 1,
            SetNo7: 1,
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
            Manuf:"",
            Volume: "",
            WorkPress: "",
            TestDt: new Date(),
            SerialNo: "",
            Perform: "",
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

export default ox2Reducer;
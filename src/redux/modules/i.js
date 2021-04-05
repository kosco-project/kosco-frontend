import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'i/CHANGE_FIELD';
const CHANGE_FIELD_D2 = 'i/CHANGE_FIELD_D2';
const CHECKBOX = 'i/CHECKBOX';
const ADD_INITIALSTATE = 'i/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'i/DELETE_INITIALSTATE';
const STORAGE = 'i/STORAGE';

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
    VESSELNM: ""
  },
  D1: {
    0: {
      SerNo: "",
      ManufType: "",
      ManufDt: new Date(),
    },
    1: {
      SerNo: "",
      ManufType: "",
      ManufDt: new Date(),
    },
    2: {
      SerNo: "",
      ManufType: "",
      ManufDt: new Date(),
    },
    3: {
      SerNo: "",
      ManufType: "",
      ManufDt: new Date(),
    },

  },
  D2: {
    0: "",
    1: "",
  },
  D3: {
    0: {
      Normal: 1,
      Abnormal: 0,
    },
    1: {
      Normal: 1,
      Abnormal: 0,
    },
    2: {
      Normal: 1,
      Abnormal: 0,
    },
    3: {
      Normal: 1,
      Abnormal: 0,
    },
    4: {
      Normal: 1,
      Abnormal: 0,
    },
    5: {
      Normal: 1,
      Abnormal: 0,
    },
    6: {
      Normal: 1,
      Abnormal: 0,
    },
    7: {
      Normal: 1,
      Abnormal: 0,
    },
    8: {
      Normal: 1,
      Abnormal: 0,
    },
    9: {
      Normal: 1,
      Abnormal: 0,
    },
    10: {
      Normal: 1,
      Abnormal: 0,
    },
  }
}

// REDUCER
const iReducer = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { id, name, value } }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            ...state.D1[id],
            [name]: value,
          }
        }
      }
    },
    [CHANGE_FIELD_D2]: (state, { payload: { name, value } }) => {
      return {
        ...state,
        D2: {
          ...state.D2,
          [name] : value,
        }
      }
    },

    [CHECKBOX]: (state, { payload: { name, key } }) => {
      return {
        ...state,
        D3: {
          ...state.D3,
          [name]: {
            Normal: key === 'Normal' ? 1 : 0,
            Abnormal: key === 'Abnormal' ? 1 : 0,
          }
        }
      }
    },
    [ADD_INITIALSTATE]: (state, { payload: id }) => {
      return {
        ...state,
        D1: {
          ...state.D1,
          [id]: {
            SerNo: "",
            ManufType: "",
            ManufDt: new Date(),
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
)

export default iReducer;
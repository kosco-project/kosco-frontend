import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const GET_INSPECTION_LIST = 'inspectionList/GET_INSPECTION_LIST';

// CREATE ACTION
export const getInspectionList = createAction(GET_INSPECTION_LIST);

//  INITIAL STATE
const initialState = { list: [], total_pages: 0 };

// REDUCER
const inspectionList = handleActions(
  {
    [GET_INSPECTION_LIST]: (state, { payload }) => ({
      ...state,
      list: payload.list,
      total_pages: payload.total_pages,
    }),
  },
  initialState
);

export default inspectionList;

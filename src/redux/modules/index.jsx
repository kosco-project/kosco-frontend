import { combineReducers } from 'redux';
import inspectionList from './inspectionList';
import docsInput from "./docsInput";


const rootReducer = combineReducers({
  docsInput,
  inspectionList,
});

export default rootReducer;

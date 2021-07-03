import { combineReducers } from 'redux';
import h2A from './h2A';
import i from './i';
import i1 from './i1';
import g from './g';
import p1 from './p1';
import ox2 from './ox2';
import h1h3h31 from './h1h3h31';
import inspectionList from './inspectionList';
import docsInput from "./docsInput";


const rootReducer = combineReducers({
  docsInput,
  inspectionList,
  h2A,
  h1h3h31,
  i,
  i1,
  g,
  p1,
  ox2,
});

export default rootReducer;

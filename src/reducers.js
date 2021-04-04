import { combineReducers } from 'redux'
import orgReducer from './reducers/org_reducer';
import userReducer from './reducers/user_reducer';


let joinedReducers = {
    orgReducer: orgReducer,
    userReducer: userReducer,
}
  
let rootReducer = combineReducers(joinedReducers)
  
export default rootReducer;


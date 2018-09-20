import { combineReducers } from "redux";
import UserReducer from "./reducer_users";
import ActiveUserReducer from './reducer_activeUser'

const rootReducer = combineReducers({
  usersFromReducer: UserReducer,
  activeUser : ActiveUserReducer
});

export default rootReducer;

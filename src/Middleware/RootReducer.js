import { combineReducers } from "redux";
import StartReducer from "./StartReducer";
import ExtraReducer from "./ExtraReducer";
const RootReducer = combineReducers({ StartReducer, ExtraReducer });
export default RootReducer;

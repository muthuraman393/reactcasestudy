import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import herolistreducer from "./herolistreducer";


export default combineReducers({
  todos,
  visibilityFilter,
  herolistreducer
});

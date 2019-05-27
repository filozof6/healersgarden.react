import { combineReducers } from "redux";
import healerReducer from "components/healer/reducers";

export default combineReducers({
  healers: healerReducer
});

import { combineReducers } from "redux";
import healerReducer from "components/healer/reducers";
import authReducer from "components/auth/reducers";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    healers: healerReducer,
    auth: authReducer,
    form: formReducer
});

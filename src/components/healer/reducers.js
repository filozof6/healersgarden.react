import types from "./types";
import healerActions from "./actions";

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE:
      // do something and return new state
      break;
    case types.LIST:
      console.log("reducer list firing", healerActions.list());
      return {
        ...state,
        items: healerActions.list().payload
      };
    case types.READ:
      // do something and return new state
      break;
    case types.REMOVE:
      // do something and return new state
      break;
    case types.UPDATE:
      // do something and return new state
      break;
    default:
      return state;
  }
};

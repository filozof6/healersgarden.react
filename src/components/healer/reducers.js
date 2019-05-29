import types from "./types";

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE:
      // do something and return new state
      break;
    case types.LIST + "_saga":
      console.log("reducer list firing", action);
      return {
        ...state,
        items: action.payload
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

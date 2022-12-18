import * as types from "./actiontypes";

const initialState = {
  Shoes: [],
  isLoading: false,
  isError: false,
};
const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SHOES_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        // isError: false,
      };
    case types.GET_SHOES_SUCCESS:
      return {
        ...oldState,
        Shoes: payload,
      };
    case types.GET_SHOES_ERROR:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};
export {reducer};

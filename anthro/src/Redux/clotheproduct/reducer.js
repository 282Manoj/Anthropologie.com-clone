import * as types from "./actiontypes";

const initialState = {
  cloths: [],
  isLoading: false,
  isError: false,
};
const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CLOTHES_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        // isError: false,
      };
    case types.GET_CLOTHES_SUCCESS:
      return {
        ...oldState,
        cloths: payload,
      };
    case types.GET_CLOTHES_ERROR:
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

import axios from "axios";
import * as types from "./actiontypes";

const getClotheRequest = () => {
  return {
    type: types.GET_CLOTHES_REQUEST,
  };
};

const getClotheSucces = (payload) => {
  return {
    type: types.GET_CLOTHES_SUCCESS,
    payload,
  };
};

const getClotheError = () => {
  return {
    type: types.GET_CLOTHES_ERROR,
  };
};


const getClothes= (params) =>dispatch=> {
    dispatch(getClotheRequest());
    return axios.get("https://anthropologyapi-2nd.onrender.com/cloths",params)
    .then((res)=>{
        dispatch(getClotheSucces(res.data));

    })
    .catch(()=>{
        dispatch(getClotheError());
    });


}
export {getClothes}



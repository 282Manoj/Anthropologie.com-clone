import axios from "axios";
import * as types from "../shoesproduct/actiontypes";

const getShoesRequest = () => {
  return {
    type: types.GET_SHOES_REQUEST,
  };
};

const getShoesSucces = (payload) => {
  return {
    type: types.GET_SHOES_SUCCESS,
    payload,
  };
};

const getShoesError = () => {
  return {
    type: types.GET_SHOES_ERROR,
  };
};


const getShoes= (params) =>dispatch=> {
    dispatch(getShoesRequest());
    return axios.get("https://anthropologyapi.onrender.com/shoes",params)
    .then((res)=>{
        dispatch(getShoesSucces(res.data));
    

    })
    .catch(()=>{
        dispatch(getShoesError());
    });


}
export {getShoes}

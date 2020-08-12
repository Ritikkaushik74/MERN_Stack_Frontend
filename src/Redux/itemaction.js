import { Add_Items, Delete_Items, Get_Items, Loading_Items } from "./type";
import axios from "axios";
// import uuid from "react-uuid";

export const getItems = () => dispatch => {
  dispatch(lodaingItems);
  axios
    .get(`https://j2kbt.sse.codesandbox.io/api/items`)
    .then(res =>
      dispatch({
        type: Get_Items,
        payload: res.data
      })
    )
    .catch(err => console.log("err in get Request", err));
};

export const addItems = item => dispatch => {
  console.log("Additem", item);
  axios
    .post("https://j2kbt.sse.codesandbox.io/api/items", item)
    .then(res => {
      console.log("Posting", res);
      dispatch({
        type: Add_Items,
        payload: res.data
      });
    })
    .catch(err => console.log("error in post request", err));
  // return {
  //   type: Add_Items,
  //   payload: item
  //   };
};

export const deleteItems = _id => dispatch => {
  axios
    .delete(`https://j2kbt.sse.codesandbox.io/api/items/${_id}`)
    .then(res =>
      dispatch({
        type: Delete_Items,
        payload: _id
      })
    )
    .catch(err => console.log("Error in Delete", err));
  // console.log("delete item ", id);
  // return {
  //   type: Delete_Items,
  //   payload: _id
  // };
};

export const lodaingItems = () => {
  return {
    type: Loading_Items
  };
};

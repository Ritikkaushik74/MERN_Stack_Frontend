import uuid from "react-uuid";
import { Add_Items, Delete_Items, Get_Items, Loading_Items } from "../type";
// import { deleteItems } from "../itemaction";

const initialState = {
  items: [],
  loading: false
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_Items:
      console.log("Get Items", action.payload);
      return {
        ...state,
        state: {
          items: action.payload
        }
      };

    case Add_Items:
      console.log("item Reducer addItem", action.payload);
      console.log("item Reducer addItem state", state);
      return {
        ...state,
        state: {
          items: [action.payload, ...state.state.items]
        }
      };

    case Delete_Items:
      console.log("delete in itemReducer ", action.payload);
      {
        const newState = {
          ...state, // items: [action.payload.id, action.payload.name]
          state: {
            items: state.state.items.filter(item => item._id !== action.payload)
          }
        };
        console.log("delete in itemReducer ", newState);
        return newState;
        // )
      }
    case Loading_Items: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return { state };
  }
};

export default itemReducer;

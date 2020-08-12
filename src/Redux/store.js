import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducer";
import itemReducer from "./reducer/itemReducer";

// const initialState = {};
const middleware = [thunk];

export const store = createStore(
  itemReducer,

  compose(
    applyMiddleware(...middleware)
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

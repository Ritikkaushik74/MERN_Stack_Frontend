import "./styles.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

import React from "react";
import HeaderNav from "./components/HeaderNav";
import ShopingList from "./components/ShopingList";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <HeaderNav />
        <ShopingList />
      </div>
    </Provider>
  );
}

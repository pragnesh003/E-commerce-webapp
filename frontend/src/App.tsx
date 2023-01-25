import React from "react";

import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import Routing from "./app/Routing";
import store from './redux/store';

function App() {
  return (
    // Provide Redux store
    <Provider store={store} >
      <Routing />
    </Provider >
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/reducer";
import App from "./component/App";
import "./index.css";



const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

let store = createStore(reducer, applyMiddleware(...middleware));


const AppClient = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppClient/>, document.getElementById("root"));

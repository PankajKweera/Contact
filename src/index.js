import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import contactReducer from "./redux/reducers/contactReducer";
import { createStore} from"redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import "./index.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(contactReducer,composeWithDevTools())

root.render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
);
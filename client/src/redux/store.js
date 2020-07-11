import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const initialState = {};
const midlleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...midlleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

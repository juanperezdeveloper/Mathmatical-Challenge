import React from "react";
import HomeScreen from "./app/screens/HomeScreen";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./app/store/reducers";

export default function App() {
  const rootReducer = combineReducers({
    math: reducer,
  });
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

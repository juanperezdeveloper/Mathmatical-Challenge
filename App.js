import React, { useState, useEffect } from "react";
import HomeScreen from "./app/screens/HomeScreen";
import * as SplashScreen from 'expo-splash-screen';
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./app/store/reducers";

SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const rootReducer = combineReducers({
    math: reducer,
  });
  const store = createStore(rootReducer, applyMiddleware(thunk));

  setTimeout(async () => {
    await SplashScreen.hideAsync();
  }, 2000);

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

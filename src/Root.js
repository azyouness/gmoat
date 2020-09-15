import React, { useReducer } from "react";
import { AppContext, rootReducer, initStore } from "context";
import App from "App";

const Root = () => {
  const [store, dispatch] = useReducer(rootReducer, initStore);

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      <App />
    </AppContext.Provider>
  );
};

export default Root;

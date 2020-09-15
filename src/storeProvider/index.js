import React, { createContext, useContext, useReducer } from "react";
import { rootReducer } from "storeProvider/reducer";

// initial context state
export const initState = {
  movies: [], // basic movies data fetched from csv data file
  detailedMovies: [], // detailed movies infos fetched from TMDB 
  searchKeyword: "",
  sort: {
    by: "rank", // rank/year
    asc: true, // asc/desc
  },
};

// create the context
export const AppContext = createContext({});

// export the store hook
export const useStore = () => useContext(AppContext);

// store provider component
const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(rootReducer, initState);

  // memoizes the contextValue so only rerenders if store or dispatch change
  // const contextValue = useMemo(() => ({store, dispatch}), [store, dispatch]);

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default StoreProvider;
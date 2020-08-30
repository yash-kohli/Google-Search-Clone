import React, { createContext, useContext, useReducer } from "react";

// Preparing DataLayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook that allows to pull data from DataLayer
export const useStateValue = () => useContext(StateContext);

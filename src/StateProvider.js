import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialtState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialtState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

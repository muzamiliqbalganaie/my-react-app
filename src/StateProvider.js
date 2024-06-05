import React ,{createContext,useContext,useReducer, useState} from "react";

//prepares the datalayer
export const StateContext = createContext();



//Wrap our app and provide the data layer
export const StateProvider = ({ reducer,initialState,children,}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
      {children}
    </StateContext.Provider>
);

//pull information  from the data layer
export const useStateValue = () => useContext(StateContext);



//ThemeProvider 


// Create a context for the theme
export const ThemeContext = createContext(
  {
    themeMode: "light-theme",
    darkTheme: () => {},
    lightTheme:() => {},
  }
  
);

 

  
//create a provider for a theme
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
  return useContext(ThemeContext)
}


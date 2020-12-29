import { createContext, useState } from "react";

export const UIThemeContext = createContext();

export const UIThemeContextProvider = ({ children }) => {
   const { theme, setTheme } = useState("light");

   return <UIThemeContext.Provider value={{ theme, setTheme }}>
      {children}
   </UIThemeContext.Provider>
}
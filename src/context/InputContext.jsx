import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputContextProvider = ({ children }) => {
   const [inputValue, setInputValue] = useState("");

   return (
      <InputContext.Provider value={{ inputValue, setInputValue }}>
         {children}
      </InputContext.Provider>
   )
}
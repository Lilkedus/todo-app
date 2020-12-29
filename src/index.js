import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InputContextProvider } from "./context/InputContext";
import { UIThemeContextProvider } from './context/UIThemeContext';
import { TodoContextProvider } from "./context/TodoContext";

ReactDOM.render(
  <UIThemeContextProvider>
    <TodoContextProvider>
      <InputContextProvider>
        <App />
      </InputContextProvider>
    </TodoContextProvider>
  </UIThemeContextProvider>,
  document.getElementById('root')
);
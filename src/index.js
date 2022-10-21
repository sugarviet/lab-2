import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProviderForLighting } from './components/ThemeContext';
import {BrowserRouter} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'


import {ThemeProvider} from '@mui/material';
import { customTheme } from './customTheme';
import { Provider } from 'react-redux';
import userReducer from './features/Users'

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <ThemeProviderForLighting>
  //     <BrowserRouter>
  //     <ThemeProvider theme={customTheme}>
  //       <App />
  //     </ThemeProvider>
  //     </BrowserRouter>
  //   </ThemeProviderForLighting>
  // </React.StrictMode>

<ThemeProviderForLighting>
  <BrowserRouter>
  <ThemeProvider theme={customTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  </BrowserRouter>
</ThemeProviderForLighting>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { ProductsProvider } from './context/products.context';
import { NavigationProvider } from './context/navigation.context';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <ProductsProvider>
    <NavigationProvider>
        <App />
    </NavigationProvider>
    </ProductsProvider>
    </UserProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

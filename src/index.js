import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './components/theme'
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter} from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

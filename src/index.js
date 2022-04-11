import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './components/theme'
import { ThemeProvider } from '@mui/material/styles';
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom'
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 99667a1232dba0abfb20f8aeba5d32f8e96e3454



ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <App />
      </ThemeProvider>
    {/* </BrowserRouter> */}
=======
        <App />
      </ThemeProvider>
    {/* </BrowserRouter> */}

>>>>>>> 99667a1232dba0abfb20f8aeba5d32f8e96e3454
  </React.StrictMode>,
  document.getElementById('root')
);

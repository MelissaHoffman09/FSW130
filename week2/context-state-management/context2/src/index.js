import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShowContextProvider } from './showContext';

ReactDOM.render(
    <ShowContextProvider>
      <App />
    </ShowContextProvider>,
  document.getElementById('root')
);

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import {store} from './store/index.js'

import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>

      <App />

    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

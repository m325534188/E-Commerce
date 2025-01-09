import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {legacy_createStore as creatStore} from 'redux'
import {Provider} from 'react-redux'
// import reducer from "../../redux/reducer/ProductReducer"; // לפי המיקום שלך
import reducer from "./project/redux/reducer/ProductReducer.js"

const store=creatStore(reducer)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)

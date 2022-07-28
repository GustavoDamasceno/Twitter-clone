import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/'
import Login from './Pages/Login/'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)

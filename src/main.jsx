import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import StateContextGlobal from './Context/StateContextGlobal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BrowserRouter>
        <StateContextGlobal>
          <App />
        </StateContextGlobal>
      </BrowserRouter>
   
  </React.StrictMode>
)

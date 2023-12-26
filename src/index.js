import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/App'
import Context from './context/Context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>,
)

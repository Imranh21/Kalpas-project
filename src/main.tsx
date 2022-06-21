import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Kalpas from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Kalpas>
      <App />
    </Kalpas>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useGlobax } from '../../mod.ts'

let [getCount, setCount] = useGlobax(0, "count2");

/**
 * Todo: Context Rapper
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Provider value={{getCount, setCount}}>
      <App />
    </React.Provider>
  </React.StrictMode>,
)

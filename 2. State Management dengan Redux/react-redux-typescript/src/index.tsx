import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
// import reducer from './store/reducer'
import rootReducer from './rootReducer'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer)}>
      <App />
    </Provider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import './assets/css/App.css'
import { Provider } from 'react-redux'
import { store } from './components/store/store'


ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <Provider store ={store}>
    <App />
  </Provider>
  </>
)

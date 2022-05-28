import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/CreateUser'
import GlobalStyle from './styles/global'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
)

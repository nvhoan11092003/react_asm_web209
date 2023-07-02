import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios';

axios.get('/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

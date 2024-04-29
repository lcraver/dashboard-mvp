import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'devextreme/dist/css/dx.material.blue.light.css';

enum Colors {
  Purple = "secondary",
  Blue = "primary",
  Green = "success",
}

type DBEvent = {
  Date: number;
  Name: string;
  Description?: string;
  Color: Colors;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

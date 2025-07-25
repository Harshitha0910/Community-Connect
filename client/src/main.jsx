import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter> <App/> </BrowserRouter>
// )




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExamsContextProvider } from './pages/exams';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExamsContextProvider>
      <App />
    </ExamsContextProvider>
  </React.StrictMode>
);

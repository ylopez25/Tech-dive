import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { ExamsContextProvider } from './pages/exams';
import theme from './components/theme';
import Fonts from './components/fonts';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <ExamsContextProvider>
        <App />
      </ExamsContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

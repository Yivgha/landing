import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from "./global.style";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
      </Layout>
    <GlobalStyle />
  </React.StrictMode>
);


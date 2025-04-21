import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// estilos globais e reset
import './index.css';

// configuração de idiomas (i18next)
import './i18n';

// ponto de montagem – garante que o elemento #root exista
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

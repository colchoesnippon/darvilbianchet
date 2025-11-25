import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

// Verifica se o elemento root existe antes de tentar renderizar o React.
// Isso permite que o site funcione em "Modo Estático" (apenas index.html + Alpine.js)
// sem gerar erros de execução.
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log("Modo Estático Ativo: Elemento #root não encontrado. O React não será inicializado.");
}

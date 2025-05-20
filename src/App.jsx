import React, { useState } from 'react';
import Login from './components/Login';
import Painel from './pages/Painel';

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {!logado ? <Login onLogin={() => setLogado(true)} /> : <Painel />}
    </div>
  );
}

export default App;
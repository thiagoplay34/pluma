import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="w-full max-w-md shadow-xl p-6 bg-white rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Acesso ao Sistema</h2>
        <div className="space-y-4">
          <input placeholder="Usuário" className="w-full p-2 border rounded" />
          <input placeholder="Senha" type="password" className="w-full p-2 border rounded" />
          <button onClick={onLogin} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
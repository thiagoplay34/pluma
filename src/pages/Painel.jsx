import React, { useState } from 'react';
import ClienteForm from '../components/ClienteForm';
import ClienteCard from '../components/ClienteCard';

const Painel = () => {
  const [clientes, setClientes] = useState([]);

  const adicionarCliente = (cliente) => {
    setClientes([...clientes, cliente]);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Painel de Empréstimos</h1>
      <ClienteForm onAdd={adicionarCliente} />
      <div className="grid gap-4 mt-4">
        {clientes.map((cliente, index) => (
          <ClienteCard key={index} cliente={cliente} />
        ))}
      </div>
    </div>
  );
};

export default Painel;
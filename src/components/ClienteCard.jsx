import React from 'react';

const ClienteCard = ({ cliente }) => {
  const valor = parseFloat(cliente.valor);
  const juros = valor * 0.2;
  const total = valor + juros;
  const valorDiario = total / cliente.dias;

  return (
    <div className="border p-4 rounded shadow bg-white">
      <p><strong>Nome:</strong> {cliente.nome}</p>
      <p><strong>CPF:</strong> {cliente.cpf}</p>
      <p><strong>Rua:</strong> {cliente.rua}</p>
      <p><strong>Valor:</strong> R$ {valor.toFixed(2)}</p>
      <p><strong>Dias:</strong> {cliente.dias}</p>
      <p><strong>Total com juros:</strong> R$ {total.toFixed(2)}</p>
      <p><strong>Valor Diário:</strong> R$ {valorDiario.toFixed(2)}</p>
    </div>
  );
};

export default ClienteCard;
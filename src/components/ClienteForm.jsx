import React, { useState } from 'react';

const ClienteForm = ({ onAdd }) => {
  const [form, setForm] = useState({ nome: '', cpf: '', rua: '', valor: '', dias: 20 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAdd(form);
    setForm({ nome: '', cpf: '', rua: '', valor: '', dias: 20 });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome do cliente" className="p-2 border rounded" />
      <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="CPF" className="p-2 border rounded" />
      <input name="rua" value={form.rua} onChange={handleChange} placeholder="Rua" className="p-2 border rounded" />
      <input name="valor" type="number" value={form.valor} onChange={handleChange} placeholder="Valor" className="p-2 border rounded" />
      <select name="dias" value={form.dias} onChange={handleChange} className="p-2 border rounded">
        <option value="20">20 dias</option>
        <option value="24">24 dias</option>
      </select>
      <button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white py-2 rounded">Adicionar Cliente</button>
    </div>
  );
};

export default ClienteForm;
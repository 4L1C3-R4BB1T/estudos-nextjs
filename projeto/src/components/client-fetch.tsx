'use client';

import React from 'react';

type Produto = {
  id: number;
  nome: string;
};

export default function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.origamid.online/produtos');
      const json = (await response.json()) as Produto[];
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}

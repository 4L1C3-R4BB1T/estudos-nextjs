🔙 [Voltar para o Início](https://github.com/4L1C3-R4BB1T/estudos-nextjs "Voltar para o Início")

---

### 🔸 Server Fetch

Server Components podem ser definidos como funções assíncronas, assim podemos fazer o fetch de dados no servidor e retornar o componente com os dados já disponíveis.

Se estiver criando uma aplicação fullstack, também se pode acessar o banco de dados diretamente no componente.

```tsx
type Produto = {
  nome: string;
  id: number;
};

export default async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos');
  const data = (await response.json()) as Produto[];

  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
```

---

### 🔸 Client Fetch

Podemos ainda fazer o fetch de dados no client, utilizando o ```useEffect``` e ```useState```. Porém esses dados não serão pré-renderizados no servidor.

```tsx
'use client';

import React from 'react';

type Produto = {
  nome: string;
  id: number;
};

export default function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://api.origamid.online/produtos');
      const json = (await response.json()) as Produto[];
      setData(json);
    }
    fetchProducts();
  }, []);

  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
```

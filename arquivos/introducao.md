🔙 [Voltar para o Início](https://github.com/4L1C3-R4BB1T/estudos-nextjs "Voltar para o Início")

---

### 🔸 Next.js vs React

#### React (Vite/CRA)

- Executa no navegador (client)
- Serve páginas que são populadas pelo JavaScript
- Pode impactar negativamente o SEO
- Depende de plugins (react-router)
- Deploy pode ser feito em qualquer hospedagem

#### Next.js

- Executa no navegador (client) e no servidor (server)
- Serve páginas já renderizadas no servidor (SSR)
- Pode melhorar o SEO e o carregamento inicial
- Tenta ser uma solução completa (rotas, API, etc)
- É um framework, logo te dá mais regras
- Deploy deve ser feito em um servidor Node.js
- Bugs, mudanças e atualizações

---

### 🔸 Fetch React 18 (Vite/CRA)

```js
import React from "react";

export default function ClientPage() {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    async function getProdutos() {
      const response = await fetch("https://api.origamid.online/produtos");
      const body = await response.json();
      setProdutos(body);
    }
    getProdutos();
  }, []);

  return (
    <main>
      <h1>Client</h1>
      {produtos &&
        produtos.map((produto) => <li key={produto.id}>{produto.nome}</li>)}
    </main>
  );
}
```

---

### 🔸 Fetch Next.js 14

```js
export default async function ServerPage() {
  const response = await fetch("https://api.origamid.online/produtos");
  const produtos = await response.json();

  return (
    <main>
      <h1>Server</h1>
      {produtos.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </main>
  );
}
```

🔙 [Voltar para o Início](https://github.com/4L1C3-R4BB1T/estudos-nextjs "Voltar para o Início")

---

### 🔸 Server Components

Possuem acesso a API do servidor (Node) como o ```fs```, ```path```, e outras implementadas pelo Next.js como o ```fetch``` e ```cookies```. Renderizam no servidor.

Por padrão, todos os componentes são Server Components.

```tsx
// page.tsx -> server component
export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
```

```tsx
// @/component/acessos -> server component
import fs from 'fs/promises';

export default async function Acessos() {
  await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf8');
  const data = await fs.readFile('acesso.txt', 'utf8');

  return <div>{data}</div>;
}
```

---

### 🔸 Client Components

Possui acesso as APIs web como ```window``` e ```document```, bem como as APIs do Next.js e do React, como ```useState``` e ```useEffect```. Continuam sendo pré-renderizados no servidor, mas são "hidratados" (Hydration) no cliente.

Para definir um componente como Client Component, basta adicionar ```'use client'``` na primeira linha do componente.

```tsx
'use client';
import React from 'react';

export default function Width() {
  const [ativar, setAtivar] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h2 style={{ color: ativar ? '#680' : '#b00' }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivar((b) => !b)}>Click</button>
    </div>
  );
}
```

---

### 🔸 Nested Components

Server Components podem conter Client e Server Components, mas Client Components não podem conter Server Components.

Evite definir páginas (page.tsx) como Client Components, mantenha elas sempre como Server Components, assim elas podem receber Server e Client Components.

```tsx
// page.tsx
import Acessos from '@/components/acessos'; // server
import Width from '@/components/width'; // client

export default async function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Acessos />
      <Width />
    </main>
  );
}
```

---

### 🔸 Pré-renderização

Client Components são pré-renderizados no servidor, durante a pré-renderização, não temos acesso a APIs web como ```window``` e ```document```. Por isso erros como ```document is not defined``` podem ocorrer.

Se o código estiver dentro do useEffect, ele só será ativado no cliente, por isso não teremos problemas. Mas códigos fora do useEffect podem causar erros.

```tsx
'use client';
import React from 'react';

export default function Width() {
  // erro
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth,
  );

  return <p>Width: {width}</p>;
}
```

```tsx
// solução de importação
import dynamic from 'next/dynamic';

export const Width = dynamic(() => import('@/components/width'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Width />
    </main>
  );
}
```

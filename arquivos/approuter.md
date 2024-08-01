🔙 [Voltar para o Início](https://github.com/4L1C3-R4BB1T/estudos-nextjs "Voltar para o Início")

---

### 🔸 Arquivos = Rotas

No Next.js, cada arquivo ```page.tsx``` dentro da pasta ```app``` é uma rota. O arquivo ```app/page.tsx``` é a rota ```/``` e o arquivo ```app/sobre/page.tsx``` é a rota ```/sobre```.

```tsx
// app/page.tsx
// o nome do componente não importa, apenas o nome do arquivo
export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
```

```tsx
// app/sobre/page.tsx
export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
    </main>
  );
}
```

---

### 🔸 layout.tsx

O arquivo ```layout.tsx``` é o layout padrão de todas as páginas. Ele é importado automaticamente pelo Next.js e pode ser usado para adicionar elementos que se repetem em todas as páginas, como a navegação.

Na raiz ele é necessário para adicionar o ```<html>``` e o ```<body>```. Porém nas demais rotas ele é opcional.

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
```

---

### 🔸 metadata

Exportar um objeto ```const metadata```, irá adicionar as meta tags na página. Pode ser exportado de qualquer arquivo de rota, como ```page.tsx``` ou ```layout.tsx```.

```tsx
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
```

---

### 🔸 Componentes

Componentes podem ser criados e importados da mesma forma que usamos no React. No next podemos utilizar o ```@``` como atalho para a pasta ```src```.

```tsx
// components/menu.tsx
export default function Menu() {
  return (
    <ul className="menu">
      <li>Home</li>
      <li>Sobre</li>
    </ul>
  );
}
```

```tsx
import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';

export const metadata: Metadata = {
  title: 'Origamid Next',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
```
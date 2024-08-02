🔙 [Voltar para o Início](https://github.com/4L1C3-R4BB1T/estudos-nextjs "Voltar para o Início")

---

### 🔸 Link

O Next.js possui o componente Link que permite a navegação entre páginas sem que a página seja recarregada (client side).

```tsx
import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre</Link>
      </li>
    </ul>
  );
}
```

---

### 🔸 Prefetch

O Link automaticamente faz o prefetch de páginas estáticas, ou seja, o Next.js já carrega a página em segundo plano para que ela esteja disponível quando o usuário clicar no link. (true é o padrão)

O comportamento do prefetch só é possível ser analisado em produção.

```bash
npm run build
npm run start
```

```tsx
import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/sobre" prefetch={true}>
          Sobre
        </Link>
      </li>
    </ul>
  );
}
```

---

### 🔸 Link Interno e Scroll

O comportamento de scroll interno funciona da mesma forma que o ```<a>```. É possível desabilitar o scroll automático com ```scroll={false}```.

```tsx
import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre#empresa" scroll={false}>
          Sobre
        </Link>
      </li>
    </ul>
  );
}
```

```tsx
export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      <h2 style={{ margin: '1600px 0' }} id="empresa">
        A Empresa
      </h2>
    </main>
  );
}
```

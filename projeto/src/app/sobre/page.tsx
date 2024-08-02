import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página sobre',
};

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
    </main>
  );
}
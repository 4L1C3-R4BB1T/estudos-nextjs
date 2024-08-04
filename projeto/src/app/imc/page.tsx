// @/app/imc/page.tsx
import IMC from '@/components/imc';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IMC',
  description: 'Essa é a página IMC',
};

export default function IMCPage() {
  return (
    <main>
      <h1>IMC</h1>
      <IMC />
    </main>
  );
}

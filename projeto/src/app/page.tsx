import Acesso from '@/components/acesso';
import ClientFetch from '@/components/client-fetch';
import ServerFetch from '@/components/server-fetch';
import Width from '@/components/width';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Essa é a página home',
};

export default function Home() {  
  return (
    <main>
      <h1>Home</h1>
      <Width /> 
      {/* <Acesso /> */}
      <ServerFetch />
      {/* <ClientFetch /> */}
    </main>
  );
}

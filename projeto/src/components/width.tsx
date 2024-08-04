'use client';

import React from 'react';

export default function Width() {
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <h2 style={{ color: ativo ? '#680' : '#b00' }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </div>
  );
}

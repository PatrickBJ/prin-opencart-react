import { PageHeader } from '@/components';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { generateTitle } from '@/utils';

const generateComponentName = (url) => {
  switch (url) {
    case 'criando-seu-fotoproduto': return 'CriandoSeuFotoProduto';
    case 'fotolivros': return 'FotoLivros';
    default: return url.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }
};

export const Info = () => {
  const { infoType } = useParams();

  const [Component, setComponent] = useState(() => () => <div>Carregando...</div>);

  useEffect(() => {
    const componentName = generateComponentName(infoType);
    import(/* @vite-ignore */ `./${componentName}`)
      .then(module => {
        setComponent(() => module.default);
      })
      .catch(() => {
        setComponent(() => () => <div style={{ textAlign: 'center' }}>Ops! Página não encontrada.</div>);
      });
  }, [infoType]);

  return (
    <>
      <PageHeader title={generateTitle(infoType)} url={`info/${infoType}`} />
      <div className="main-content full-width inner-page">
        <div className="background">
          <div className="pattern">
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-md-9 center-column content-with-background" id="content" style={{ padding: 0 }}>
                  <div style={{ fontSize: '13px' }}>
                    <Component />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div >
    </>
  );
};
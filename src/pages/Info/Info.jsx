import { PageHeader } from '@/components';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const generateTitle = (url) => {
  const words = url.split('-');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const Info = () => {
  const { infoType } = useParams();

  const [Component, setComponent] = useState(() => () => <div>Loading...</div>);

  useEffect(() => {
    const componentName = infoType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    import(`./${componentName}`)
      .then(module => {
        setComponent(() => module.default);
      })
      .catch(() => {
        setComponent(() => () => <div style={{ textAlign: 'center' }}>Page not found</div>);
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
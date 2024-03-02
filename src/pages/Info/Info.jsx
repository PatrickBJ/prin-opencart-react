import { PageHeader } from '@/components';
import { useParams } from 'react-router-dom';
import { Empresa } from './Empresa';

const title = {
  'a-empresa': 'A Empresa'
};

export const Info = () => {
  const { infoType } = useParams();

  return (
    <>
      <PageHeader title={title[infoType]} url={`info/${infoType}`} />
      <div className="main-content full-width inner-page">
        <div className="background">
          <div className="pattern">
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-md-9 center-column content-with-background" id="content" style={{ padding: 0 }}>
                  <div style={{ fontSize: '13px' }}>
                    {infoType === 'a-empresa' && <Empresa />}
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
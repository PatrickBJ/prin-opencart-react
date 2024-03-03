import { Link } from 'react-router-dom';

export const PageHeader = ({ title, url }) => (
  <div className="breadcrumb full-width">
    <div className="background-breadcrumb"></div>
    <div className="background">
      <div className="shadow"></div>
      <div className="pattern">
        <div className="container">
          <div className="clearfix" style={{ paddingTop: '50px' }}>
            <h1 id="title-page">{title}</h1>
            <ul style={{ paddingBottom: '50px', fontSize: '13px' }}>
              <li><Link to="/">Home</Link></li>
              {url && <li style={{ paddingLeft: '4px' }}><Link to={url}>{title}</Link></li>}
              {/* {url.split('/').map((item) => (
                <li key={item} style={{ paddingLeft: '4px' }}><Link to={`/${item}`}>{item}</Link></li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
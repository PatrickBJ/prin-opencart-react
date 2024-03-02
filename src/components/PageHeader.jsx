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
              <li style={{ paddingRight: '4px' }}><Link to="/">Home</Link></li>
              <li><Link to={url}>{title}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
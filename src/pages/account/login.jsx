import { useState } from 'react';
import { PageHeader } from '@/components';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email.length <= 0) setError('O campo e-mail deve ser preenchido');
  };

  return (
    <>
      <PageHeader title="Identificação" url="account/identification" />
      <div className="main-content full-width inner-page">
        <div className="background">
          <div className="pattern">
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-md-9 center-column content-with-background" id="content" style={{ padding: 0 }}>
                  <div style={{ fontSize: '13px' }}>
                    <div className="well">
                      <h2>Identificação</h2>
                      <p><strong>Por favor, insira seu e-mail para ser identificado pela Printástico:</strong></p>
                      <form method="post" encType="multipart/form-data" onSubmit={onSubmitHandler}>
                        <div className="form-group">
                          <label className="control-label " htmlFor="input-email">E-mail</label>
                          <input
                            id="input-email"
                            type="email"
                            name="email"
                            value={email}
                            placeholder="E-mail"
                            className="form-control "
                            onChange={(e) => { setEmail(e.target.value); setError(); }}
                          />
                          {error && <div className="text-danger">{error}</div>}
                        </div>
                        <input type="submit" value="Continuar" className="btn btn-primary" />
                      </form>
                    </div>
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
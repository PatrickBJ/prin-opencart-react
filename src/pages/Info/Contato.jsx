const Contato = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={onSubmitHandler}>
        <fieldset>
          <legend>Formulário de contato</legend>
          <div className="form-group required">
            <label className="col-sm-2 control-label" htmlFor="input-name" style={{ color: '#2d2d2d' }}>Seu nome</label>
            <div className="col-sm-10">
              <input type="text" name="name" value="" id="input-name" className="form-control" />
            </div>
          </div>
          <div className="form-group required">
            <label className="col-sm-2 control-label" htmlFor="input-email" style={{ color: '#2d2d2d' }}>Seu e-mail</label>
            <div className="col-sm-10">
              <input type="text" name="email" value="" id="input-email" className="form-control" />
            </div>
          </div>
          <div className="form-group required">
            <label className="col-sm-2 control-label" htmlFor="input-enquiry" style={{ color: '#2d2d2d' }}>Sua mensagem</label>
            <div className="col-sm-10">
              <textarea name="enquiry" rows="10" id="input-enquiry" className="form-control"></textarea>
            </div>
          </div>
        </fieldset>
        <div className="buttons">
          <div className="pull-right">
            <input className="btn btn-primary" type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Contato;
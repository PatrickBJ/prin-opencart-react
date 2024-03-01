import MailIcon from '@/assets/icon-mail.png';
import FooterImage from '@/assets/footer.jpg';
import { Link } from 'react-router-dom';

export const Footer = () => (
    <div className="footer full-width">
        <div className="background-footer" />
        <div className="background">
            <div className="shadow" />
            <div className="pattern" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="advanced-grid advanced-grid-20596476 border-top responsive-margin-top-0" style={{ marginTop: '-40px', marginBottom: '0px', width: '1519px', left: '-189.6px' }}>
                        <div style={{}}>               <div className="container" style={{ paddingLeft: '189.6px', paddingRight: '189.6px' }}>
                            <div style={{ paddingTop: '0px', paddingLeft: '0px', paddingBottom: '0px', paddingRight: '0px' }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="furniture-contact">
                                            <div className="row">
                                                <div className="col-sm-12 text-center">
                                                    <img src={MailIcon} alt="Mail" />
                                                    <Link to="http://opencart2.printastico.com.br/index.php?route=information/contact" className="button">ENVIAR e-mail</Link>
                                                </div>
                                            </div>
                                        </div>                                                                                                                      </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="advanced-grid advanced-grid-50060283 furniture-footer-padding-left " style={{ marginTop: '0px', marginBottom: '0px', width: '1519px', left: '-189.6px' }}>
                        <div style={{ backgroundImage: `url(${FooterImage})`, backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll' }}>                         <div className="container" style={{ paddingLeft: '189.6px', paddingRight: '189.6px' }}>
                            <div style={{ paddingTop: '0px', paddingLeft: '0px', paddingBottom: '0px', paddingRight: '0px' }}>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div style={{ height: '13px' }} /><div className="strip-line" /><div className="row" style={{ clear: 'both' }}><div className="col-sm-12"><ul><li><Link to="/a-empresa">A Empresa</Link></li><li><Link to="http://opencart2.printastico.com.br/qualidade-e-tecnologia">Qualidade e Tecnologia</Link></li><li><Link to="http://opencart2.printastico.com.br/meio-ambiente">Meio Ambiente</Link></li><li><Link to="http://opencart2.printastico.com.br/privacidade-e-seguranca">Privacidade e Segurança</Link></li><li><Link to="http://opencart2.printastico.com.br/termos-de-uso">Termos de Uso</Link></li><li><Link to="http://opencart2.printastico.com.br/contato-institucional">Contato Institucional</Link></li><li><Link to="http://opencart2.printastico.com.br/international-contact">International Contact</Link></li></ul></div></div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div style={{ height: '13px' }} /><div className="strip-line" /><div className="row" style={{ clear: 'both' }}><div className="col-sm-12"><ul><li><Link to="http://opencart2.printastico.com.br/v%C3%ADdeo-tutorial">Vídeo Tutorial</Link></li><li><Link to="http://opencart2.printastico.com.br/escolha-seu-produto">Escolha seu Produto</Link></li><li><Link to="http://opencart2.printastico.com.br/selecione-suas-fotos">Selecione suas Fotos</Link></li><li><Link to="http://opencart2.printastico.com.br/crie-seu-produto">Criando seu FotoProduto</Link></li><li><Link to="http://opencart2.printastico.com.br/pagamento">Pagamento</Link></li><li><Link to="http://opencart2.printastico.com.br/acompanhe-seu-pedido">Acompanhe seu Pedido</Link></li><li><Link to="http://opencart2.printastico.com.br/producao-grafica">Produção Gráfica</Link></li><li><Link to="http://opencart2.printastico.com.br/entrega-prazos-frete">Entrega, Prazos e Frete</Link></li></ul></div></div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div style={{ height: '13px' }} /><div className="strip-line" /><div className="row" style={{ clear: 'both' }}><div className="col-sm-12"><ul><li><Link to="http://opencart2.printastico.com.br/fotolivros">O que é um FotoLivro?</Link></li><li><Link to="http://opencart2.printastico.com.br/calendarios">O que é um FotoCalendário?</Link></li></ul></div></div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div style={{ height: '13px' }} /><div className="strip-line" /><div className="row" style={{ clear: 'both' }}><div className="col-sm-12"><ul><li><Link to="http://opencart2.printastico.com.br/index.php?route=account/identification">Minha Conta</Link></li><li><Link to="http://opencart2.printastico.com.br/index.php?route=account/login">Histórico de Pedidos</Link></li><li><Link to="http://opencart2.printastico.com.br/index.php?route=account/login">Lista de Desejos</Link></li><li><Link to="http://opencart2.printastico.com.br/index.php?route=account/login">Newsletter</Link></li><li><Link to="http://opencart2.printastico.com.br/index.php?route=information/sitemap">Mapa do Site</Link></li><li><Link to="http://opencart2.printastico.com.br/index.php?route=information/contact">Contate-nos</Link></li></ul></div></div>
                                    </div>
                                </div><div className="row">                                   <div className="col-sm-12">
                                    <div style={{ paddingTop: '8px', paddingBottom: '11px' }}>Printástico - Todos os direitos reservados. <Link to="https://www.delalibera.com.br/" target="_blank">Delalibera</Link></div>                                                                                                                      </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
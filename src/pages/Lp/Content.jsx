import Produto1 from '@/assets/produto1.jpg';
import Produto2 from '@/assets/produto2.jpg';
import Produto3 from '@/assets/produto3.jpg';
import FreeShippingIcon from '@/assets/icone1.png';
import MoneyIcon from '@/assets/icone2.png';
import SupportIcon from '@/assets/icone3.png';
import FotoLivroA4PaisagemCapaDuraFrente from '@/assets/FotoLivro-A4-Paisagem-Capa-Dura-Frente-340x340.jpg';
import CartaoVisitas from '@/assets/fotolivros-340x340.jpg';
import Calendario from '@/assets/fotolivros-340x340.jpg';
import Newsletter from '@/assets/newsletter.jpg';
import { Link } from 'react-router-dom';
import { BannerItem } from './styled';

export const Content = () => (
    <div className="main-content full-width home">
        <div className="background-content" />
        <div className="background">
            <div className="shadow" />
            <div className="pattern">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row banners banners-with-padding-30">
                                <BannerItem className="col-sm-4"><Link to="/produto/fotoLivro"><img src={Produto1} alt="Image 1" /></Link></BannerItem>
                                <BannerItem className="col-sm-4"><Link to="/produto/fotoCalendario"><img src={Produto2} alt="Image 2" /></Link></BannerItem>
                                <BannerItem className="col-sm-4"><Link to="/produto/fotoCalendario"><img src={Produto3} alt="Image 3" /></Link></BannerItem>
                            </div>
                            <div className="advanced-grid advanced-grid-38187900  " style={{ marginTop: '0px', marginBottom: '0px', width: '1519px', left: '-189.6px' }}>
                                <div style={{ backgroundImage: `url(${Newsletter})`, backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll' }}>                         <div className="container" style={{ paddingLeft: '189.6px', paddingRight: '189.6px' }}>
                                    <div style={{ paddingTop: '0px', paddingLeft: '0px', paddingBottom: '0px', paddingRight: '0px' }}>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="furniture-why-our-products">
                                                    <div className="heading text-center"><span style={{ color: '#2d2d2d' }}>Por que nossos</span> <span style={{ color: '#00a9e7' }}>produtos?</span></div>
                                                    <div className="row">
                                                        <div className="col-sm-4 text-center">
                                                            <img src={FreeShippingIcon} alt="Free shipping" />
                                                            <p style={{ color: '#2d2d2d' }}>Crie a partir de R$ 19,99</p>
                                                            <span style={{ color: '#00a9e7' }}>Produtos ótimos e acessíveis</span>
                                                        </div>
                                                        <div className="col-sm-4 text-center">
                                                            <img src={MoneyIcon} alt="Money" />
                                                            <p style={{ color: '#2d2d2d' }}>Mesa de criação intuitiva</p>
                                                            <span style={{ color: '#00a9e7' }}>Software rápido, fácil e divertido</span>
                                                        </div>
                                                        <div className="col-sm-4 text-center">
                                                            <img src={SupportIcon} alt="Support" />
                                                            <p style={{ color: '#2d2d2d' }}>Padrão de alta qualidade </p>
                                                            <span style={{ color: '#00a9e7' }}>Impressão padrão Porsche® e Rolls Royce®</span>
                                                        </div>
                                                    </div>
                                                </div>                                                                                                                      </div>
                                        </div><div className="row">                                   <div className="col-sm-12">
                                            <div className="furniture-newsletter clearfix row" id="newsletter38187900">
                                                <div className="heading"><span style={{ color: '#2d2d2d' }}>Cadastre-se na nossa</span> <span style={{ color: '#00a9e7' }}>newsletter</span></div>
                                                <div className="inputs">
                                                    <input type="text" className="email" placeholder="seu e-mail" />
                                                    <a className="button subscribe">Assinar</a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="advanced-grid advanced-grid-2582262  " style={{ marginTop: '0px', marginLeft: '0px', marginRight: '0px', marginBottom: '0px' }}>
                                <div style={{}}>               <div className="container">
                                    <div style={{ paddingTop: '0px', paddingLeft: '0px', paddingBottom: '0px', paddingRight: '0px' }}>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="box clearfix box-with-products furniture-box">
                                                    <div className="box-heading" style={{ marginBottom: '20px' }}>Produtos em destaque</div>
                                                    <div className="strip-line" />
                                                    <div className="clear" />
                                                    <div className="box-content products">
                                                        <div className="box-product">
                                                            <div id="myCarousel18352875">
                                                                {/* Carousel items */}
                                                                <div className="carousel-inner">
                                                                    <div className="active item"><div className="product-grid"><div className="row">	    				    			<div className="col-sm-4 col-xs-6  ">
                                                                        {/* Product */}
                                                                        <div className="product clearfix">
                                                                            <div className="left">
                                                                                <div className="new">Novo</div>
                                                                                <div className="image ">
                                                                                    <Link to="http://opencart2.printastico.com.br/fotolivro">
                                                                                        <img src={FotoLivroA4PaisagemCapaDuraFrente} alt="FotoLivro" className />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                            <div className="right">
                                                                                <div className="name"><Link to="http://opencart2.printastico.com.br/fotolivro">FotoLivro</Link></div>
                                                                                <div className="price">
                                                                                    R$19,99	    								    						</div>
                                                                                <div className="add-to-cart">
                                                                                    <a onClick={() => console.log('cart.add(96866)')}>Criar Agora!</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                        <div className="col-sm-4 col-xs-6  ">
                                                                            {/* Product */}
                                                                            <div className="product clearfix">
                                                                                <div className="left">
                                                                                    <div className="new">Novo</div>
                                                                                    <div className="image ">
                                                                                        <Link to="http://opencart2.printastico.com.br/cartao-de-visitas">
                                                                                            <img src={CartaoVisitas} alt="Cartão de Visitas" className />
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="right">
                                                                                    <div className="name"><Link to="http://opencart2.printastico.com.br/cartao-de-visitas">Cartão de Visitas</Link></div>
                                                                                    <div className="price">
                                                                                        R$19,99	    								    						</div>
                                                                                    <div className="add-to-cart">
                                                                                        <a onClick={() => console.log('cart.add(96867)')}>Criar Agora!</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-4 col-xs-6  ">
                                                                            {/* Product */}
                                                                            <div className="product clearfix">
                                                                                <div className="left">
                                                                                    <div className="new">Novo</div>
                                                                                    <div className="image ">
                                                                                        <Link to="http://opencart2.printastico.com.br/calendario">
                                                                                            <img src={Calendario} alt="Calendário" className />
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="right">
                                                                                    <div className="name"><Link to="http://opencart2.printastico.com.br/calendario">Calendário</Link></div>
                                                                                    <div className="price">
                                                                                        R$19,99	    								    						</div>
                                                                                    <div className="add-to-cart">
                                                                                        <a onClick={() => console.log('cart.add(96868)')}>Criar Agora!</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div></div></div>    		</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
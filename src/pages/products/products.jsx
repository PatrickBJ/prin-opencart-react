import { PageHeader } from '@/components';
import Fotolivros from '@/assets/fotolivros-263x263.jpg';
import FotoLivroA4PaisagemCapaDuraFrente from '@/assets/FotoLivro-A4-Paisagem-Capa-Dura-Frente-263x263.jpg';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faExchange, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

export const Products = () => {
  const { productId } = useParams();

  return (
    <>
      <PageHeader title="Produtos" url={'products'} />
      <div className="main-content full-width inner-page">
        <div className="background-content"></div>
        <div className="background">
          <div className="shadow"></div>
          <div className="pattern">
            <div className="container">
              <div className="row">
                <div className="col-md-3" id="column-left">
                  <div className="box box-with-categories box-no-advanced">
                    <div className="box-heading">Produtos</div>
                    <div className="strip-line"></div>
                    <div className="box-content box-category">
                      <ul className="accordion" id="accordion-category">
                        <li className="panel">
                          <a href="/produtos/fotos" className={`${productId === 'fotos' ? 'active' : ''}`}>Fotos</a>
                          {/* <span className="head"><a style={{ float: 'right', paddingRight: '5px' }} className="accordion-toggle collapsed" data-tooltip-id="collapse" data-parent="#accordion-category" href="/produtos/#category1"><span className="plus">+</span><span className="minus">-</span></a></span> */}
                          {/* <div id="category1" className="panel-collapse collapse" style={{ clear: 'both' }}>
                            <ul>
                              <li>
                                <a href="/produtos/fotos/fotos-tamanho-15cm-x-10cm-a6">Tamanho 15cm X 10cm A6</a>
                              </li>
                              <li>
                                <a href="/produtos/fotos/fotos-tamanho-15cm-x-20cm-a5">Tamanho 15cm X 20cm A5</a>
                              </li>
                            </ul>
                          </div> */}
                        </li>
                        <li className="panel">
                          <a href="/produtos/foto-livros" className={`${productId === 'foto-livros' ? 'active' : ''}`}>Foto Livros</a>
                          {/* <span className="head"><a style={{ float: 'right', paddingRight: '5px' }} className="accordion-toggle" data-tooltip-id="collapse" data-parent="#accordion-category" href="/produtos/#category2"><span className="plus">+</span><span className="minus">-</span></a></span> */}
                          {/* <div id="category2" className="panel-collapse collapse in" style={{ clear: 'both' }}>
                          <ul>
                            <li>
                              <a href="/produtos/foto-livros/formato-paisagem">Formato Paisagem</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-livros/formato-retrato">Formato Retrato</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-livros/formato-quadrado">Formato Quadrado</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-livros/tamanho-15cm-x-10cm-a6">Tamanho 15cm X 10cm A6</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-livros/tamanho-15cm-x-20cm-a5">Tamanho 15cm X 20cm A5</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-livros/foto-livros-tamanho-20cm-x-30cm-a4">Tamanho 20cm X 30cm A4</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-livros/tamanho-20cm-x-20cm">Tamanho 20cm X 20cm</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-livros/tamanho-30cm-x-30cm">Tamanho 30cm X 30cm</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-livros/tamanho-40cm-x-40cm">Tamanho 40cm X 40cm</a>
                            </li>
                          </ul>
                        </div> */}
                        </li>
                        <li className="panel">
                          <a href="/produtos/posteres" className={`${productId === 'posteres' ? 'active' : ''}`}>Posteres</a>
                        </li>
                        <li className="panel">
                          <a href="/produtos/cartoes" className={`${productId === 'cartoes' ? 'active' : ''}`}>Cartões</a>
                        </li>
                        <li className="panel">
                          <a href="/produtos/foto-calendarios" className={`${productId === 'foto-calendarios' ? 'active' : ''}`}>Foto Calendários</a>
                          {/* <span className="head"><a style={{ float: 'right', paddingRight: '5px' }} className="accordion-toggle collapsed" data-tooltip-id="collapse" data-parent="#accordion-category" href="/produtos/#category5"><span className="plus">+</span><span className="minus">-</span></a></span> */}
                          {/* <div id="category5" className="panel-collapse collapse " style={{ clear: 'both' }}>
                          <ul>
                            <li>
                              <a href="/produtos/foto-calendarios/foto-calendario-formato-paisagem">Formato Paisagem</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-calendarios/foto-calendario-formato-retrato">Formato Retrato</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-calendarios/tamanho-10cm-x-20cm-mesa">Tamanho 10cm X 20cm Mesa</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-calendarios/tamanho-20cm-x-30cm-a4">Tamanho 20cm X 30cm A4</a>
                            </li>
                            <li>
                              <a href="/produtos/foto-calendarios/tamanho-30cm-x-40cm-a6">Tamanho 30cm X 40cm A6</a>
                            </li>
                          </ul>
                        </div> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-9 center-column content-without-background" id="content">
                      <div id="mfilter-content-container">
                        {/* <!-- Products grid --> */}
                        <div className="product-grid active">
                          <div className="row">
                            <div className="col-sm-4 col-xs-6">

                              {/* <!-- Product --> */}
                              <div className="product clearfix product-hover">
                                <div className="left">
                                  <div className="image ">
                                    <a href="/produtos/foto-livros/cartao-de-visitas">
                                      <img src={Fotolivros} alt="Cartão de Visitas" className="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="right">
                                  <div className="name"><a href="/produtos/foto-livros/cartao-de-visitas">Cartão de Visitas</a></div>

                                  <div className="price">R$19,99</div>

                                  <div className="only-hover">
                                    <ul>
                                      <li><a onClick={() => { console.log('cart.add(&#39;96867&#39;)'); }} data-tooltip-id="tooltip" data-tooltip-content="Criar Agora!"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                                      <li><a onClick={() => { console.log('compare.add(&#39;96867&#39;)'); }} data-tooltip-id="tooltip" data-tooltip-content="Add to compare"><FontAwesomeIcon icon={faExchange} /></a></li>
                                      <li><a onClick={() => { console.log('wishlist.add(&#39;96867&#39;)'); }} data-tooltip-id="tooltip" data-tooltip-content="+ Lista de Desejos"><FontAwesomeIcon icon={faHeart} /></a></li>
                                      <Tooltip id="tooltip" />
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                              {/* <!-- Product --> */}
                              <div className="product clearfix product-hover">
                                <div className="left">
                                  <div className="image ">
                                    <a href="/produtos/foto-livros/fotolivro">
                                      <img src={FotoLivroA4PaisagemCapaDuraFrente} alt="FotoLivro" />
                                    </a>
                                  </div>
                                </div>
                                <div className="right">
                                  <div className="name"><a href="/produtos/foto-livros/fotolivro">FotoLivro</a></div>
                                  <div className="price">R$19,99</div>
                                  <div className="only-hover">
                                    <ul>
                                      <li><a onClick={() => { console.log('cart.add(&#39;96866&#39;)'); }} data-tooltip-id="tooltip" data-tooltip-content="Criar Agora!"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                                      <li><a onClick={() => { console.log('compare.add(&#39;96866&#39;'); }} data-tooltip-id="tooltip" data-tooltip-content="Add to compare"><FontAwesomeIcon icon={faExchange} /></a></li>
                                      <li><a onClick={() => { console.log('wishlist.add(&#39;96866&#39;)'); }} data-tooltip-id="tooltip" data-tooltip-content="+ Lista de Desejos"><FontAwesomeIcon icon={faHeart} /></a></li>
                                      <Tooltip id="tooltip" />
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="row pagination-results">
                        <div className="col-sm-6 text-left"></div>
                        <div className="col-sm-6 text-right">Exibindo de 1 a 2 do total de 2 (1 páginas)</div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

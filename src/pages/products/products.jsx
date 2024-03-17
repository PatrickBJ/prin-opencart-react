import { PageHeader } from '@/components';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faShoppingCart, faExchange, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import classNames from 'classnames';
import { getProductList } from './api';

export const Products = () => {
  const { category, subcategory } = useParams();
  const products = getProductList(category, subcategory);

  return (
    <>
      <PageHeader title="Produtos" url={'/produtos'} />
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
                          <Link to="/produtos/fotos" className={classNames({ active: category === 'fotos' })}>Fotos</Link>
                          <span className="head">
                            <Link
                              to="/produtos/fotos"
                              style={{ float: 'right', paddingRight: '5px' }}
                              className="accordion-toggle collapsed">
                              <FontAwesomeIcon icon={category === 'fotos' ? faChevronUp : faChevronDown} />
                            </Link>
                          </span>
                          <div id="category1" className={classNames('panel-collapse', 'collapse', { in: category === 'fotos' })} style={{ clear: 'both' }}>
                            <ul>
                              <li>
                                <Link to="/produtos/fotos/fotos-tamanho-15cm-x-10cm-a6" className={classNames({ active: subcategory === 'fotos-tamanho-15cm-x-10cm-a6' })}>Tamanho 15cm X 10cm A6</Link>
                              </li>
                              <li>
                                <Link to="/produtos/fotos/fotos-tamanho-15cm-x-20cm-a5" className={classNames({ active: subcategory === 'fotos-tamanho-15cm-x-20cm-a5' })}>Tamanho 15cm X 20cm A5</Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="panel">
                          <Link to="/produtos/foto-livros" className={classNames({ active: category === 'foto-livros' })}>Foto Livros</Link>
                          <span className="head">
                            <Link
                              to="/produtos/foto-livros"
                              style={{ float: 'right', paddingRight: '5px' }}
                              className="accordion-toggle collapsed">
                              <FontAwesomeIcon icon={category === 'foto-livros' ? faChevronUp : faChevronDown} />
                            </Link>
                          </span>
                          <div id="category2" className={classNames('panel-collapse', 'collapse', { in: category === 'foto-livros' })} style={{ clear: 'both' }}>
                            <ul>
                              <li>
                                <Link
                                  to="/produtos/foto-livros/formato-paisagem"
                                  className={classNames({ active: subcategory === 'formato-paisagem' })}>
                                  Formato Paisagem
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/produtos/foto-livros/formato-retrato"
                                  className={classNames({ active: subcategory === 'formato-retrato' })}>
                                  Formato Retrato
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/produtos/foto-livros/formato-quadrado"
                                  className={classNames({ active: subcategory === 'formato-quadrado' })}>
                                  Formato Quadrado
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={classNames({ active: subcategory === 'tamanho-15cm-x-10cm-a6' })}
                                  to="/produtos/foto-livros/tamanho-15cm-x-10cm-a6">Tamanho 15cm X 10cm A6
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={classNames({ active: subcategory === 'tamanho-15cm-x-20cm-a5' })}
                                  to="/produtos/foto-livros/tamanho-15cm-x-20cm-a5">Tamanho 15cm X 20cm A5
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={classNames({ active: subcategory === 'foto-livros-tamanho-20cm-x-30cm-a4' })}
                                  to="/produtos/foto-livros/foto-livros-tamanho-20cm-x-30cm-a4">Tamanho 20cm X 30cm A4
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={classNames({ active: subcategory === 'tamanho-20cm-x-20cm' })}
                                  to="/produtos/foto-livros/tamanho-20cm-x-20cm">Tamanho 20cm X 20cm
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={classNames({ active: subcategory === 'tamanho-30cm-x-30cm' })}
                                  to="/produtos/foto-livros/tamanho-30cm-x-30cm">Tamanho 30cm X 30cm
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className={classNames({ active: subcategory === 'tamanho-40cm-x-40cm' })}
                                  to="/produtos/foto-livros/tamanho-40cm-x-40cm">Tamanho 40cm X 40cm
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="panel">
                          <Link to="/produtos/posteres" className={classNames({ active: category === 'posteres' })}>Posteres</Link>
                        </li>
                        <li className="panel">
                          <Link to="/produtos/cartoes" className={classNames({ active: category === 'cartoes' })}>Cartões</Link>
                        </li>
                        <li className="panel">
                          <Link to="/produtos/foto-calendarios" className={classNames({ active: category === 'foto-calendarios' })}>Foto Calendários</Link>
                          <span className="head">
                            <Link
                              to="/produtos/foto-calendarios"
                              style={{ float: 'right', paddingRight: '5px' }}
                              className="accordion-toggle collapsed">
                              <FontAwesomeIcon icon={category === 'foto-calendarios' ? faChevronUp : faChevronDown} />
                            </Link>
                          </span>
                          <div id="category5" className={classNames('panel-collapse', 'collapse', { in: category === 'foto-calendarios' })} style={{ clear: 'both' }}>
                            <ul>
                              <li>
                                <Link
                                  to="/produtos/foto-calendarios/foto-calendario-formato-paisagem"
                                  className={classNames({ active: subcategory === 'foto-calendario-formato-paisagem' })}>
                                  Formato Paisagem
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/produtos/foto-calendarios/foto-calendario-formato-retrato"
                                  className={classNames({ active: subcategory === 'foto-calendario-formato-retrato' })}>
                                  Formato Retrato
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/produtos/foto-calendarios/tamanho-10cm-x-20cm-mesa"
                                  className={classNames({ active: subcategory === 'tamanho-10cm-x-20cm-mesa' })}>
                                  Tamanho 10cm X 20cm Mesa
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/produtos/foto-calendarios/tamanho-20cm-x-30cm-a4"
                                  className={classNames({ active: subcategory === 'tamanho-20cm-x-30cm-a4' })}>
                                  Tamanho 20cm X 30cm A4
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/produtos/foto-calendarios/tamanho-30cm-x-40cm-a6"
                                  className={classNames({ active: subcategory === 'tamanho-30cm-x-40cm-a6' })}>
                                  Tamanho 30cm X 40cm A6
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="center-column content-without-background" id="content">
                      <div className="product-grid active">
                        <div className="row">
                          {products.map((product) =>
                            <div key={product.id} className="col-sm-3">
                              <div className="product clearfix product-hover">
                                <div className="left">
                                  <div className="image ">
                                    <Link to={product.detailUrl}>
                                      <img src={product.img} alt={product.name} />
                                    </Link>
                                  </div>
                                </div>
                                <div className="right">
                                  <div className="name"><Link to={product.detailUrl}>{product.name}</Link></div>
                                  <div className="price">{product.price}</div>
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
                          )}
                        </div>
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

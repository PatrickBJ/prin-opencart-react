import { useState } from 'react';
import Logo from '@/assets/Logo-Header-Printastico65px.png';
import CartIcon from '@/assets/icon-cart.png';
import CartIconHover from '@/assets/icon-cart-hover.png';
import C1 from '@/assets/collection-01.png';
import C2 from '@/assets/collection-02.png';
import C3 from '@/assets/collection-03.png';
import C4 from '@/assets/collection-04.png';
import C5 from '@/assets/collection-05.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [dropDownCartOpen, setDropDownCartOpen] = useState(false);
    const [dropDownProductsOpen, setDropDownProductsOpen] = useState(false);

    return (
        <header className="header-type-3">
            <div className="background-header" />
            <div className="slider-header">
                <div id="top" className="full-width">
                    <div className="background-top" />
                    <div className="background">
                        <div className="shadow" />
                        <div className="pattern">
                            <div className="top-bar">
                                <div className="container">
                                    <ul className="menu">
                                        <li><Link to="/account/login">Minha conta</Link></li>
                                        <li><Link to="/account/wishlist" id="wishlist-total">Lista de desejos (0)</Link></li>
                                        <li><Link to="/checkout/cart">Carrinho de compras</Link></li>
                                        <li><Link to="/checkout/checkout">Finalizar pedido</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    {/* Header Left */}
                                    <div className="col-sm-4" id="header-left" style={{ minWidth: '273px' }}>
                                        {/* Logo */}
                                        <div className="logo"><Link to="/"><img src={Logo} title="Printástico" alt="Printástico" /></Link></div>
                                    </div>
                                    {/* Header Left */}
                                    <div className="col-sm-4" id="header-center">
                                        <div className="megamenu-background">
                                            <div>
                                                <div className="overflow-megamenu container">
                                                    <div id="megamenu_31648168" className="container-megamenu  horizontal">
                                                        <div className="megaMenuToggle">
                                                            <div className="megamenuToogle-wrapper">
                                                                <div className="megamenuToogle-pattern">
                                                                    <div className="container">
                                                                        <div><span /><span /><span /></div>
                                                                        Navigation				</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="megamenu-wrapper">
                                                            <div className="megamenu-pattern">
                                                                <div className="container">
                                                                    <ul className="megamenu shift-up">
                                                                        <li className=" mobile-disabled"><p className="close-menu" /><p className="open-menu mobile-disabled" /><Link to="http://opencart2.printastico.com.br/" className="clearfix"><span><strong>&nbsp;&nbsp;&nbsp;</strong></span></Link></li>
                                                                        <li
                                                                            className={`with-sub-menu hover${dropDownProductsOpen ? ' active' : ''}`}
                                                                            onMouseEnter={() => setDropDownProductsOpen(true)}
                                                                            onMouseLeave={() => setDropDownProductsOpen(false)}
                                                                        >
                                                                            <p className="close-menu" />
                                                                            <p className="open-menu mobile-disabled" />
                                                                            <Link to="/produtos" className="clearfix">
                                                                                <span>
                                                                                    <strong>Produtos</strong>
                                                                                    <FontAwesomeIcon icon={faChevronDown} color="#00a9e7" style={{ marginLeft: '12px', fontSize: '12px' }} />
                                                                                </span>
                                                                            </Link>
                                                                            <div className="sub-menu full-width-sub-menu" style={{ width: '100%' }}>
                                                                                <div className="content"><p className="arrow" />
                                                                                    <div className="row"><div className="col-sm-12  mobile-disabled">
                                                                                        <div style={{ position: 'relative', margin: '-30px -45px 0px -45px' }}>
                                                                                            <div className="furniture-collections row row-no-padding">
                                                                                                <div className="col-sm-3" style={{ background: `url(${C1}) bottom center no-repeat` }}>
                                                                                                    <Link to="/produtos/fotos">Fotos<FontAwesomeIcon icon={faChevronRight} />
                                                                                                    </Link>
                                                                                                </div>
                                                                                                <div className="col-sm-3" style={{ background: `url(${C2}) bottom center no-repeat` }}>
                                                                                                    <Link to="/produtos/foto-livros">FotoLivros<FontAwesomeIcon icon={faChevronRight} /></Link>
                                                                                                </div>
                                                                                                <div className="col-sm-3" style={{ background: `url(${C3}) bottom center no-repeat` }}>
                                                                                                    <Link to="/produtos/posteres">Pôsteres<FontAwesomeIcon icon={faChevronRight} /></Link>
                                                                                                </div>
                                                                                                <div className="col-sm-3" style={{ background: `url(${C4}) bottom center no-repeat` }}>
                                                                                                    <Link to="/produtos/cartoes">Cartões<FontAwesomeIcon icon={faChevronRight} /></Link>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="furniture-collections row row-no-padding">
                                                                                                <div className="col-sm-3" style={{ background: `url(${C5}) bottom center no-repeat` }}>
                                                                                                    <Link to="/produtos/foto-calendarios">FotoCalendários<FontAwesomeIcon icon={faChevronRight} /></Link>
                                                                                                </div>
                                                                                                <div className="col-sm-3">
                                                                                                    <Link to="/products">Todos os<br /> produtos<FontAwesomeIcon icon={faChevronRight} /></Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div></div></div></div></div></li>
                                                                        <li><p className="close-menu" /><p className="open-menu mobile-disabled" /><Link to="/info/contato" className="clearfix"><span><strong>Contato</strong></span></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Header Right */}
                                    <div className="col-sm-4" id="header-right">
                                        {/* Search */}
                                        <div className="search_form">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </div>
                                        <Link to="/account/login" className="my-account">
                                            <FontAwesomeIcon icon={faUser} />
                                        </Link>
                                        {/* Cart block */}
                                        <div
                                            id="cart_block"
                                            className={`dropdown${dropDownCartOpen ? ' open' : ''}`}
                                            onMouseEnter={() => setDropDownCartOpen(true)}
                                            onMouseLeave={() => setDropDownCartOpen(false)}
                                        >
                                            <div className="cart-heading dropdown-toogle" data-hover="dropdown" data-toggle="dropdown" onClick={() => console.log("http://opencart2.printastico.com.br/index.php?route=checkout/cart'")}>
                                                <i className="cart-count"><span id="total_count_ajax">0</span></i>
                                                <i className="cart-icon"><img src={CartIconHover} className="cart-icon-hover" alt="" /><img src={CartIcon} className="cart-icon-standard" alt="" /></i>
                                                <p>
                                                    <strong id="total_price_ajax">
                                                        <span id="total_price">R$0,00</span>
                                                    </strong>
                                                    <FontAwesomeIcon icon={faChevronDown} color="#00a9e7" style={{ marginLeft: '12px', fontSize: '12px' }} />
                                                </p>
                                            </div>
                                            <div className="dropdown-menu" id="cart_content"><div id="cart_content_ajax">
                                                <div className="empty">Seu carrinho está vazio!</div>
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
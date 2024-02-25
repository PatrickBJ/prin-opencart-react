import Logo from '@/assets/Logo-Header-Printastico65px.png';
import CartIcon from '@/assets/icon-cart.png';
import CartIconHover from '@/assets/icon-cart-hover.png';

export const Header = () => (
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
                                    <li><a href="http://opencart2.printastico.com.br/index.php?route=account/account">Minha conta</a></li>
                                    <li><a href="http://opencart2.printastico.com.br/index.php?route=account/wishlist" id="wishlist-total">Lista de desejos (0)</a></li>
                                    <li><a href="http://opencart2.printastico.com.br/index.php?route=checkout/cart">Carrinho de compras</a></li>
                                    <li><a href="http://opencart2.printastico.com.br/index.php?route=checkout/checkout">Finalizar pedido</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {/* Header Left */}
                                <div className="col-sm-4" id="header-left" style={{ minWidth: '273px' }}>
                                    {/* Logo */}
                                    <div className="logo"><a href="http://opencart2.printastico.com.br/index.php?route=common/home"><img src={Logo} title="Printástico" alt="Printástico" /></a></div>
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
                                                                    <li className=" mobile-disabled"><p className="close-menu" /><p className="open-menu mobile-disabled" /><a href="http://opencart2.printastico.com.br/" className="clearfix"><span><strong>&nbsp;&nbsp;&nbsp;</strong></span></a></li>
                                                                    <li className=" with-sub-menu hover"><p className="close-menu" /><p className="open-menu mobile-disabled" /><a href="http://opencart2.printastico.com.br/index.php?route=product/category&path=18" className="clearfix"><span><strong>Produtos</strong></span></a><div className="sub-menu full-width-sub-menu" style={{ width: '100%' }}><div className="content"><p className="arrow" /><div className="row"><div className="col-sm-12  mobile-disabled"><div style={{ position: 'relative', margin: '-30px -45px 0px -45px' }}>
                                                                        <div className="furniture-collections row row-no-padding">
                                                                            <div className="col-sm-3" style={{ background: 'url(image/catalog/furniture/collection-01.png) bottom center no-repeat' }}>
                                                                                <a href="http://opencart2.printastico.com.br/fotos">Fotos</a>
                                                                            </div>
                                                                            <div className="col-sm-3" style={{ background: 'url(image/catalog/furniture/collection-02.png) bottom center no-repeat' }}>
                                                                                <a href="http://opencart2.printastico.com.br/foto-livros">FotoLivros</a>
                                                                            </div>
                                                                            <div className="col-sm-3" style={{ background: 'url(image/catalog/furniture/collection-03.png) bottom center no-repeat' }}>
                                                                                <a href="http://opencart2.printastico.com.br/posteres">Pôsteres</a>
                                                                            </div>
                                                                            <div className="col-sm-3" style={{ background: 'url(image/catalog/furniture/collection-04.png) bottom center no-repeat' }}>
                                                                                <a href="http://opencart2.printastico.com.br/cartoes">Cartões</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="furniture-collections row row-no-padding">
                                                                            <div className="col-sm-3" style={{ background: 'url(image/catalog/furniture/collection-05.png) bottom center no-repeat' }}>
                                                                                <a href="http://opencart2.printastico.com.br/foto-calendarios">FotoCalendários</a>
                                                                            </div>
                                                                            <div className="col-sm-3">
                                                                                <a href="http://opencart2.printastico.com.br/index.php?route=product/category&path=20">Todos os<br /> produtos</a>
                                                                            </div>
                                                                        </div>
                                                                    </div></div></div></div></div></li>
                                                                    <li><p className="close-menu" /><p className="open-menu mobile-disabled" /><a href="http://opencart2.printastico.com.br/index.php?route=information/contact" className="clearfix"><span><strong>Contato</strong></span></a></li>
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
                                    {/* Search */}<div className="search_form"><i className="fa fa-search" /></div>
                                    <a href="http://opencart2.printastico.com.br/index.php?route=account/account" className="my-account"><i className="fa fa-user" /></a>
                                    {/* Cart block */}
                                    <div id="cart_block" className="dropdown">
                                        <div className="cart-heading dropdown-toogle" data-hover="dropdown" data-toggle="dropdown" onClick="window.location.href = 'http://opencart2.printastico.com.br/index.php?route=checkout/cart'">
                                            <i className="cart-count"><span id="total_count_ajax">0</span></i>
                                            <i className="cart-icon"><img src={CartIconHover} className="cart-icon-hover" alt="" /><img src={CartIcon} className="cart-icon-standard" alt="" /></i>
                                            <p><strong id="total_price_ajax"><span id="total_price">R$0,00</span></strong></p>
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
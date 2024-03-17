import { PageHeader } from '@/components';
import { useParams, Link } from 'react-router-dom';
import { generateTitle } from '@/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getProductDetail } from './api';

export const ProductDetail = () => {
  const { category, product } = useParams();
  const {
    name,
    mainImg,
    img,
    price,
    description,
    details,
  } = getProductDetail(product);

  return (
    <>
      <PageHeader title={generateTitle(product)} url={`produtos/${category}`} />
      <div className="main-content full-width inner-page">
        <div className="background-content" />
        <div className="background">
          <div className="shadow" />
          <div className="pattern">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div
                      className="col-md-12 center-column content-without-background"
                      id="content"
                    >
                      <div itemScope="" itemType="http://schema.org/Product">
                        <span itemProp="name" className="hidden">
                          {name}
                        </span>
                        <div className="product-info">
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <div className="row" id="quickview_product">
                                <div className="col-sm-7 popup-gallery">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="product-image inner-cloud-zoom">
                                        <Link
                                          id="ex1"
                                          className="open-popup-image"
                                        >
                                          <img
                                            src={mainImg}
                                            title={name}
                                            alt={name}
                                            id="image"
                                            itemProp="image"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="overflow-thumbnails-carousel clearfix">
                                        <div
                                          className="thumbnails-carousel owl-carousel owl-theme"
                                          style={{ opacity: 1, display: "block" }}
                                        >
                                          <div className="owl-wrapper-outer">
                                            <div
                                              className="owl-wrapper"
                                              style={{
                                                width: 151,
                                                left: 0,
                                                display: "block",
                                                transition: "all 1000ms ease 0s",
                                                transform:
                                                  "translate3d(0px, 0px, 0px)"
                                              }}
                                            >
                                              <div
                                                className="owl-item"
                                                style={{ width: 151 }}
                                              >
                                                <div className="item">
                                                  <Link
                                                    className="popup-image"
                                                  >
                                                    <img
                                                      src={img}
                                                      title={name}
                                                      alt={name}
                                                    />
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="owl-controls clickable"
                                            style={{ display: "none" }}
                                          >
                                            <div className="owl-pagination">
                                              <div className="owl-page">
                                                <span className="" />
                                              </div>
                                            </div>
                                            <div className="owl-buttons">
                                              <div className="owl-prev">
                                                <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faChevronLeft} />
                                              </div>
                                              <div className="owl-next">
                                                <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faChevronRight} />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-5 product-center clearfix">
                                  <div className="review">
                                    <div className="rating">
                                      <FontAwesomeIcon icon={faStar} />
                                      <FontAwesomeIcon icon={faStar} />
                                      <FontAwesomeIcon icon={faStar} />
                                      <FontAwesomeIcon icon={faStar} />
                                      <FontAwesomeIcon icon={faStar} />
                                    </div>
                                  </div>
                                  <div className="description">{description}</div>
                                  <div className="price">
                                    <span className="price-new">
                                      <span itemProp="price" id="price-old">{price}</span>
                                    </span>
                                    <br />
                                    <div className="parcelamento parcelamento-page" />
                                  </div>
                                  <div id="product">
                                    <div className="cart">
                                      <div className="add-to-cart clearfix">
                                        <p>
                                          <span>*</span>Quantidade
                                        </p>
                                        <div className="quantity">
                                          <input
                                            type="number"
                                            name="quantity"
                                            id="quantity_wanted"
                                            size={2}
                                            defaultValue={1}
                                          />
                                        </div>
                                        <div className="shipping">
                                          <p>Frete</p>
                                          <div>
                                            <input
                                              type="text"
                                              name="zipcode"
                                              id="zipcode"
                                              placeholder="00000-000"
                                              required=""
                                              maxLength={9}
                                            />
                                            <input
                                              type="button"
                                              id="button-zipcode"
                                              defaultValue="CALCULAR"
                                              data-loading-text="Calculando..."
                                              className="button"
                                            />
                                          </div>
                                          <div id="results">
                                            <ul className="types-shipping"></ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="links clearfix">
                                        <input
                                          type="button"
                                          defaultValue="Criar Agora!"
                                          id="button-cart"
                                          rel={96867}
                                          data-loading-text="Carregando..."
                                          className="button"
                                        />
                                        <Link onClick={() => console.log("wishlist.add('96867')")}>
                                          + Lista de Desejos
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End #product */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tabs" className="htabs">
                          <Link
                            className="selected"
                          >
                            Detalhes
                          </Link>
                        </div>
                        <div
                          id="tab-description"
                          className="tab-content"
                          itemProp="description"
                          style={{ display: "block" }}
                        />
                        <p style={{ paddingBottom: 10 }}>
                          {details}
                        </p>
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

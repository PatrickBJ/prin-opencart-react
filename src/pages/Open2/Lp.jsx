import "./OpenCart2Assets/bootstrap.css";
import "./OpenCart2Assets/animate.css";
import "./OpenCart2Assets/stylesheet.css";
import "./OpenCart2Assets/responsive.css";
import "./OpenCart2Assets/menu.css";
import "./OpenCart2Assets/owl.carousel.css";
import "./OpenCart2Assets/font-awesome.min.css";
import "./OpenCart2Assets/filter_product.css";
import "./OpenCart2Assets/wide-grid.css";
import "./OpenCart2Assets/custom_code.css";
import "./OpenCart2Assets/parcelamento_desconto.css";
import "./OpenCart2Assets/magnific-popup.css";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { Content } from "./Content";
import { Footer } from "./Footer";

export const Lp = () => (
    <>
        <div className="standard-body">
            <div id="main" className>
                <Header />
                <Slider />
                <Content />
                <Footer />
            </div>
        </div>
        <div className="nav-collapse collapse" style={{ visibility: 'hidden', position: 'fixed' }} id="cwspear-is-awesome">.</div>
    </>
);
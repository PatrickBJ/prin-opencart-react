import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Header } from './Header';
import { Footer } from './Footer';
import { AppRoutes } from '@/routes';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import "@/assets/styles/font-awesome.min.css";
import "@/assets/styles/bootstrap.css";
import "@/assets/styles/animate.css";
import "@/assets/styles/responsive.css";
import "@/assets/styles/stylesheet.css";
import "@/assets/styles/owl.carousel.css";
import "@/assets/styles/filter_product.css";
import "@/assets/styles/wide-grid.css";
import "@/assets/styles/custom_code.css";
import "@/assets/styles/parcelamento_desconto.css";
import "@/assets/styles/magnific-popup.css";
import "@/assets/styles/menu.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div id="main" className="standard-body">
          <Header />
          <AppRoutes />
          <Footer />
          <div className="nav-collapse collapse" style={{ visibility: 'hidden', position: 'fixed' }} id="cwspear-is-awesome">.</div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

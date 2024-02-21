import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Header, Footer } from 'src/components';
import { AppRoutes } from 'src/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

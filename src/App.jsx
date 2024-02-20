import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Header, Content, Footer } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

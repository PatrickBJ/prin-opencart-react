import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Header, Footer } from '@/components';
import { AppRoutes } from '@/routes';
import { Lp } from '@/pages/Open2/Lp';

function App() {
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Header />
  //     <main>
  //       <AppRoutes />
  //     </main>
  //     <Footer />
  //   </ThemeProvider>
  // );
  return <Lp />;

}

export default App;

import axios from 'axios';
import styled from 'styled-components';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import Router from './routes/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;

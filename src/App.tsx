import axios from 'axios';
import styled from 'styled-components';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import Router from './routes/Router';
import { MemeContextProvider } from './context/MemeContext';

function App() {
  return (
    <MemeContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </MemeContextProvider>
  );
}

export default App;

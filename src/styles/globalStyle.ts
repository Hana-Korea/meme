import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyle = createGlobalStyle`
${reset}
@font-face{
  font-family:'EF_jejudoldam';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
body{
  height:100vh;
  background: #CCCCCC;
  line-height:1.4;
}
a,button{
  cursor:pointer;
}

  `;

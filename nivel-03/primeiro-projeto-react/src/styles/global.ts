import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    font-smooth: inherit;
    -webkit-font-smoothing:  antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px; //max-width para ficar bem no mobile, com a largura do maior elemento.
    margin: 0 auto; //Centralizar
    padding: 40px 20px; //40px vertical e 20px horizontal, 20ps é para no mobile não encostar nas laterais.
  }

  button {
    cursor: pointer;
  }
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004) !important;
    background-color: black;
  }

  #root {
    display: flex;
    overflow: hidden;
    height: 100vh;
    background: #F0F1F3;
    
    /* opacity: 0.4; */
  }
`;

export default GlobalStyle;

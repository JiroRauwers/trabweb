import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
    transition: all .3s ease-in-out .15s;
    color: #fff;
  }

  html {
    background: linear-gradient(67.75deg, #FA709A -0.36%, #FC9E75 88.68%, #FEE140 115.15%, #FEE140 115.15%);
  }

  body {
    min-height: 100vh;
  }

` 
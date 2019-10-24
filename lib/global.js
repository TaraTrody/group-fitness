/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Exo:400,500,600,700,900,900i|Open+Sans:300,400,600&display=swap');

html, body {
  margin: 0;
  padding: 0;
}
*, *::after, *::before {
  box-sizing: inherit;
  margin: 0px;
  padding: 0px;
}

body{
  box-sizing: border-box;
  font-family: 'Exo', sans-serif;
  fontWeight: 300;
  lineHeight: 1.5em;
  
}
`;

export default GlobalStyles;

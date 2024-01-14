import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: SUIT;
    src: url("./../font/SUIT-Variable.ttf");
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: SUIT, serif;
  }
  
  body {
    min-width: 320px;
  }
  
  body {
    height: calc(var(--vh) * 100);
    //height: 100vh;
  }
  
  #root {
    height: 100%;
  }
  
  .App {
    height: 100%;
  }
  
  button, input {
    background: none;
    color: inherit;
    border: none;
    cursor: pointer;
    outline: inherit;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
  input:focus {
    outline: none;
  }
`
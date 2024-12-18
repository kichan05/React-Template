import {createGlobalStyle} from "styled-components";
import {InitialStyle} from "./InitialStyle.js";
import {FontStyle} from "./Font.js";
import {spaceStyle} from "./SpaceStyle.js";

export const GlobalStyle = createGlobalStyle`
  ${InitialStyle};
  ${FontStyle};
  ${spaceStyle};
  
  *, *::before, *::after {
    font-family: SUIT, sans-serif;
  }
  
  body {
    min-width: 320px;
    background-color: ${p => p.theme.color.Gray3};
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
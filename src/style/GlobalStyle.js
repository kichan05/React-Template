import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    width: 100%;
  }
  
  button {
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

export const Theme = {
  color: {
    White: "#ffffff",
    Black: "#000000",
    Gray0: "#f8f9fa",
    Gray1: "#f1f3f5",
    Gray2: "#e9ecef",
    Gray3: "#dee2e6",
    Gray4: "#ced4da",
    Gray5: "#adb5bd",
    Gray6: "#868e96",
    Gray7: "#495057",
    Gray8: "#343a40",
    Gray9: "#212529",
    Red0: "#fff5f5",
    Red1: "#ffe3e3",
    Red2: "#ffc9c9",
    Red3: "#ffa8a8",
    Red4: "#ff8787",
    Red5: "#ff6b6b",
    Red6: "#fa5252",
    Red7: "#f03e3e",
    Red8: "#e03131",
    Red9: "#c92a2a",
    Pink0: "#fff0f6",
    Pink1: "#ffdeeb",
    Pink2: "#fcc2d7",
    Pink3: "#faa2c1",
    Pink4: "#f783ac",
    Pink5: "#f06595",
    Pink6: "#e64980",
    Pink7: "#d6336c",
    Pink8: "#c2255c",
    Pink9: "#a61e4d",
    Grape0: "#f8f0fc",
    Grape1: "#f3d9fa",
    Grape2: "#eebefa",
    Grape3: "#e599f7",
    Grape4: "#da77f2",
    Grape5: "#cc5de8",
    Grape6: "#be4bdb",
    Grape7: "#ae3ec9",
    Grape8: "#9c36b5",
    Grape9: "#862e9c",
    Violet0: "#f3f0ff",
    Violet1: "#e5dbff",
    Violet2: "#d0bfff",
    Violet3: "#b197fc",
    Violet4: "#9775fa",
    Violet5: "#845ef7",
    Violet6: "#7950f2",
    Violet7: "#7048e8",
    Violet8: "#6741d9",
    Violet9: "#5f3dc4",
    Indigo0: "#edf2ff",
    Indigo1: "#dbe4ff",
    Indigo2: "#bac8ff",
    Indigo3: "#91a7ff",
    Indigo4: "#748ffc",
    Indigo5: "#5c7cfa",
    Indigo6: "#4c6ef5",
    Indigo7: "#4263eb",
    Indigo8: "#3b5bdb",
    Indigo9: "#364fc7",
    Blue0: "#e7f5ff",
    Blue1: "#d0ebff",
    Blue2: "#a5d8ff",
    Blue3: "#74c0fc",
    Blue4: "#4dabf7",
    Blue5: "#339af0",
    Blue6: "#228be6",
    Blue7: "#1c7ed6",
    Blue8: "#1971c2",
    Blue9: "#1864ab",
    Cyan0: "#e3fafc",
    Cyan1: "#c5f6fa",
    Cyan2: "#99e9f2",
    Cyan3: "#66d9e8",
    Cyan4: "#3bc9db",
    Cyan5: "#22b8cf",
    Cyan6: "#15aabf",
    Cyan7: "#1098ad",
    Cyan8: "#0c8599",
    Cyan9: "#0b7285",
    Teal0: "#e6fcf5",
    Teal1: "#c3fae8",
    Teal2: "#96f2d7",
    Teal3: "#63e6be",
    Teal4: "#38d9a9",
    Teal5: "#20c997",
    Teal6: "#12b886",
    Teal7: "#0ca678",
    Teal8: "#099268",
    Teal9: "#087f5b",
    Green0: "#ebfbee",
    Green1: "#d3f9d8",
    Green2: "#b2f2bb",
    Green3: "#8ce99a",
    Green4: "#69db7c",
    Green5: "#51cf66",
    Green6: "#40c057",
    Green7: "#37b24d",
    Green8: "#2f9e44",
    Green9: "#2b8a3e",
    Lime0: "#f4fce3",
    Lime1: "#e9fac8",
    Lime2: "#d8f5a2",
    Lime3: "#c0eb75",
    Lime4: "#a9e34b",
    Lime5: "#94d82d",
    Lime6: "#82c91e",
    Lime7: "#74b816",
    Lime8: "#66a80f",
    Lime9: "#5c940d",
    Yellow0: "#fff9db",
    Yellow1: "#fff3bf",
    Yellow2: "#ffec99",
    Yellow3: "#ffe066",
    Yellow4: "#ffd43b",
    Yellow5: "#fcc419",
    Yellow6: "#fab005",
    Yellow7: "#f59f00",
    Yellow8: "#f08c00",
    Yellow9: "#e67700",
    Orange0: "#fff4e6",
    Orange1: "#ffe8cc",
    Orange2: "#ffd8a8",
    Orange3: "#ffc078",
    Orange4: "#ffa94d",
    Orange5: "#ff922b",
    Orange6: "#fd7e14",
    Orange7: "#f76707",
    Orange8: "#e8590c",
    Orange9: "#d9480f"
  },
  size: {

  }
}
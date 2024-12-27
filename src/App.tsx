import {GlobalStyle} from "./style/GlobalStyle.js";
import {Resize} from "./component/Resize";
import {Theme} from "./style/theme.js";
import Header from "./component/organisms/Header";
import Footer from "./component/organisms/Footer";
import UiSection from "./section/UiSection.js";
import React from "react";
import {UiContextProvider} from "./context/UiReducer.js";
import Page from "./page/Page";
import {ThemeProvider} from "styled-components";

const App : React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <UiContextProvider>
          <Header/>
          <Page/>
          <Footer/>
          <UiSection/>
        </UiContextProvider>

      </ThemeProvider>
    </div>
  );
}

export default App;

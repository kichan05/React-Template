import {GlobalStyle} from "./style/GlobalStyle";
import styled, {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import {Theme} from "./style/theme";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Button from "./component/Button";
import UiSection from "./section/UiSection";

const Test = styled.div`
  height: var(--footer-height);
  background-color: #f00;
`

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <Header/>
        <Button>Hello World</Button>
        <Footer/>

        <UiSection/>
      </ThemeProvider>
    </div>
  );
}

export default App;

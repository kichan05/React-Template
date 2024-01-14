import {GlobalStyle} from "./style/GlobalStyle";
import styled, {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import Input from "./component/Input";
import {Theme} from "./style/theme";
import Header from "./component/Header";
import Footer from "./component/Footer";

const Test = styled.div`
  height: var(--header-height);
  background-color: #f00;
`

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <Header/>
        <Test>Hello</Test>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;

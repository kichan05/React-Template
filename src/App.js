import {GlobalStyle} from "./style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import Input from "./component/Input";
import {Theme} from "./style/theme";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <Header/>
        <Input placeholder={"name"}/>
      </ThemeProvider>
    </div>
  );
}

export default App;

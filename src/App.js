import {GlobalStyle, Theme} from "./style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import Input from "./component/Input";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>
        <Input placeholder={"name"}/>
      </ThemeProvider>
    </div>
  );
}

export default App;

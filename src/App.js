import {GlobalStyle, Theme} from "./style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {useEffect} from "react";
import Button from "./component/Button";

function App() {
  const handleResize = () => {
    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Button background={"Indigo6"}>버튼</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;

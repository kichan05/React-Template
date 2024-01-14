import styled from "styled-components";
import {useEffect, useRef} from "react";

const HeaderStyle = styled.header`
  width: 100%;
  
  & > div {
    width: 100%;
    height: 100%;
    max-width: ${p => p.theme.size.mobileMaxWidth}px;

    padding: 12px;
    margin: 0 auto;
  }
`

const Header = () => {
  const headerElement = useRef()
  useEffect(() => {
    const height = headerElement.current.clientHeight
    document.documentElement.style.setProperty("--header-height", `${height}px`)
  }, [])
  return (
    <HeaderStyle>
      <div ref={headerElement}>
        <h1>헤더</h1>
      </div>
    </HeaderStyle>
  )
}

export default Header
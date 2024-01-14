import styled from "styled-components";
import {useEffect, useRef} from "react";

const FooterStyle = styled.footer`
  
  & > div {
    height: 100%;
    
    padding: 12px;
  }
`

const Footer = () => {
  const footerElement = useRef()

  useEffect(() => {
    const height = footerElement.current.clientHeight
    document.documentElement.style.setProperty("--footer-height", `${height}px`)
  }, [])

  return (
    <FooterStyle>
      <div ref={footerElement}>
        푸터
      </div>
    </FooterStyle>
  )
}

export default Footer
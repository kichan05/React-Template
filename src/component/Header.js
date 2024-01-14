import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  
  & .content {
    width: 100%;
    max-width: ${p => p.theme.size.mobileMaxWidth}px;

    padding: 12px;
    margin: 0 auto;
  }
`

const Header = () => {
  return (
    <HeaderStyle>
      <div className="content">
        <h1>헤더</h1>
      </div>
    </HeaderStyle>
  )
}

export default Header
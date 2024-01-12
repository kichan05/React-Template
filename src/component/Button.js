import styled from "styled-components";

const ButtonStyle = styled.button`
  
`

const Button = ({children}) => {
  return (
    <ButtonStyle>{children}</ButtonStyle>
  )
}

export default Button
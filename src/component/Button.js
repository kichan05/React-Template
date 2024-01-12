import styled, {css} from "styled-components";
import {darken, lighten} from "polished";

const ButtonColor = css`
  ${({theme, background}) => {
    let bgColor;
    if (background.slice(0, 1) === "#") {
      bgColor = background
    } else {
      bgColor = theme.color[background]
    }


    return css`
      background-color: ${bgColor};

      &:hover {
        background-color: ${lighten(0.05, bgColor)};
      }

      &:active {
        background-color: ${bgColor};
      }
    `
  }}
`

const ButtonStyle = styled.button`
  color: ${props => props.theme.color.Gray0};
  font-size: 16px;
  font-weight: 400;

  border-radius: 6px;
  padding: 12px;

  ${ButtonColor}
`

const Button = ({children, background}) => {
  return (
    <ButtonStyle background={background}>{children}</ButtonStyle>
  )
}

export default Button
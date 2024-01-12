import styled, {css} from "styled-components";
import {backgrounds, darken, lighten} from "polished";

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

  ${ButtonColor};
  
  transition: 200ms;
  
  &:hover {
    transform: translateY(-3px);
  }
`

const Button = ({children, background, ...rest}) => {
  return (
    <ButtonStyle background={background} {...rest}>{children}</ButtonStyle>
  )
}

Button.defaultProps = {
  background : "HeechanBlue"
}

export default Button
import styled, {css} from "styled-components";
import {lighten} from "polished";
import React from "react";

interface ButtonProps{
  textColor?: string;
  background?: string;
  isFullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
}

const ButtonColor = css<ButtonProps>`
  ${({theme, textColor, background}) => {
  let bgColor;
  if (background?.at(0) === "#") {
    bgColor = background
  } else {
    bgColor = theme.color[background!!]
  }

  let txtColor;
  if (textColor?.at(0) === "#") {
    txtColor = textColor
  } else {
    txtColor = theme.color[textColor!!]
  }

  return css`
      color: ${txtColor};
      background-color: ${bgColor};

      &:hover, &:focus {
        background-color: ${lighten(0.025, bgColor)};
      }

      &:active {
        background-color: ${bgColor};
      }
    `
}}
`

const ButtonStyle = styled.button<ButtonProps>`
  width: ${props => props.isFullWidth ? '100%' : 'unset'};
  font-size: 16px;
  font-weight: 500;

  border-radius: 6px;
  padding: 12px;

  ${ButtonColor};
  
  transition: 200ms;
  display: inline-flex;
  justify-content: center;
  
  user-select: none;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const Button : React.FC<ButtonProps> = ({
    textColor="Gray1",
    background="HeechanBlue",
    children,
    ...rest
}) => {
  return (
    <ButtonStyle textColor={textColor} background={background} {...rest}>{children}</ButtonStyle>
  )
}

export default React.memo(Button)
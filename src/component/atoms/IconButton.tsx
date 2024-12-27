import styled from "styled-components";
import {color as Color} from "../../style/theme.js";
import React from "react";

type IconButtonProps = {
    color: string,
    size: number,
    background: string,
    children: React.ReactNode
}

const IconButtonStyle = styled.button<IconButtonProps>`
  width: 45px;
  height: 45px;

  color: ${p => p.color};
  font-size: ${p => p.size}px;
  border-radius: 100%;

  background-color: ${p => p.background};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: 300ms;

  &:hover {
    background-color: ${p => p.theme.color.Gray2};
    transform: translateY(-3px);
  }
`

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  color = Color.Gray8,
  background = "transparent",
  size = 22,
  ...rest
}) => {
    return (
        <IconButtonStyle color={color} background={background} size={size} {...rest}>
            {children}
        </IconButtonStyle>
    )
}
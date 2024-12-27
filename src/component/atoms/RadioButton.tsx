import {FiCheck} from "react-icons/fi";
import styled, {css} from "styled-components";
import {FaCircleCheck, FaRegCircleDot} from "react-icons/fa6";
import {FaRegCircle} from "react-icons/fa";
import React from "react";

type RadioButtonProps = {
  onCheck: (isChecked: boolean) => void,
} & RadioButtonStyleProps

type RadioButtonStyleProps = {
  isChecked: boolean,
  children: React.ReactNode
}

export const RadioButton : React.FC<RadioButtonProps> = ({isChecked, onCheck, children}) => {
  return (
    <RadioButtonStyle isChecked={isChecked} onClick={() => onCheck(!isChecked)}>
      {isChecked ? <FaRegCircleDot className={"check-icon"}/>: <FaRegCircle className={"check-icon"}/>}
      <span>{children}</span>
    </RadioButtonStyle>
  )
}

const RadioButtonStyle = styled.span<RadioButtonStyleProps>`
  font-size: 1em;
  color: ${p => p.theme.color.Gray9};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  cursor: pointer;
  user-select: none;
  
  .check-icon {
    font-size: 1.3em;
    color: ${p => p.isChecked ? p.theme.color.Indigo5 : p.theme.color.Gray6};
    transition: 150ms;
  }
`

export default RadioButton;
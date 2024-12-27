import {FiCheck} from "react-icons/fi";
import styled, {css} from "styled-components";
import {FaCircleCheck} from "react-icons/fa6";
import React from "react";

export type CheckItemProps = {
    children? : React.ReactNode;
    isChecked : boolean;
    onCheck: (isChecked : boolean) => void;
}

export type CheckItemStyleProps = {
    isChecked : boolean;
}

export const CheckItem : React.FC<CheckItemProps> = ({children, isChecked, onCheck}) => {
  return (
    <CheckItemStyle isChecked={isChecked} onClick={() => onCheck(!isChecked)}>
      <FaCircleCheck className={"check-icon"}/>
      <span>{children}</span>
    </CheckItemStyle>
  )
}

const CheckItemStyle = styled.span<CheckItemStyleProps>`
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

export default CheckItem;
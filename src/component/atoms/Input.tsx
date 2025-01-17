import styled, {css} from "styled-components";
import {UseFormRegisterReturn} from "react-hook-form";
import React from "react";

const InputStyle = styled.input`
  color: ${p => p.theme.color.Gray8};
  font-size: 16px;
  font-weight: 400;
  
  border: 1px solid ${p => p.theme.color.Gray4};
  border-radius: 6px;
  
  padding: 12px;
  background-color: ${({theme}) => theme.color.Gray1};

  
  &::placeholder {
    font-weight: 500;
    opacity: 0.7;
  }

  &:focus {
    border: 1px solid ${p => p.theme.color.Gray5};
  }
  
  //todo: 조금더 SEXY한 방법을 찾아보자
  ${({theme, readOnly}) => readOnly && css`
    background-color: ${theme.color.Gray3};
    cursor: not-allowed;
    user-select: none;

    &:focus {
      border: 1px solid ${p => p.theme.color.Gray4};
    }
  `}
`

export type InputProps = {
  placeholder? : string,
  name?: string,
  readOnly? : boolean
} & (
  | {value?: string | number, onChange : (e : string) => void; register? : never}
  | {register : UseFormRegisterReturn<any>; onChange? : never}
);

const Input : React.FC<InputProps> = ({register, onChange, ...rest}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange?.(newValue);
  };
  return (
    <InputStyle {...register} onChange={handleChange} {...rest}/>
  )
}

export default Input
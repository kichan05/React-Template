import styled from "styled-components";
import {useForm} from "react-hook-form";
import {UseFormRegisterReturn} from "react-hook-form";

const InputStyle = styled.input`
  color: ${p => p.theme.color.Gray8};
  font-size: 16px;
  font-weight: 400;
  
  border: 1px solid ${p => p.theme.color.Gray4};
  border-radius: 6px;
  
  padding: 12px;
  background-color: ${props => props.theme.color.Gray1};
  
  &::placeholder {
    font-weight: 500;
    opacity: 0.7;
  }

  &:focus {
    border: 1px solid ${p => p.theme.color.Gray5};
  }
`

export type InputProps = {
  value: string | number,
  placeholder? : string,
  name?: string,
  disable? : boolean,
} & (
  | {onChange : (string) => void; register? : never}
  | {register : UseFormRegisterReturn; onChange? : never}
);

const Input : React.FC<InputProps> = ({...rest}) => {
  const {register} = useForm()
  return (
    <InputStyle {...rest}/>
  )
}

export default Input
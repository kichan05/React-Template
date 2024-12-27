import Input from "./Input.tsx";
import styled from "styled-components";
import type {InputProps} from "./Input.tsx";

const InputLabelStyle = styled.label`
  & .label {
    font-size: 15px;
    font-weight: 400;
    user-select: none;
    margin-bottom: 2px;
  }
  
  & > * {
    width: 100%;
  }
`

type InputLabelProps = {
  label: string,
} & InputProps

const InputLabel : React.FC<InputLabelProps> = ({label, ...rest}) => {
  return (
    <InputLabelStyle>
      <div className={"label"}>{label}</div>
      <Input {...rest}/>
    </InputLabelStyle>
  )
}

export default InputLabel
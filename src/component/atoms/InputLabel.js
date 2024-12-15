import Input from "./Input.js";
import styled from "styled-components";

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

const InputLabel = ({label, children, ...rest}) => {
  return (
    <InputLabelStyle>
      <div className={"label"}>{label}</div>
      {children}
      <Input {...rest}/>
    </InputLabelStyle>
  )
}

export default InputLabel
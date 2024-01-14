import styled from "styled-components";
import Modal from "../component/Modal";

const UiSectionStyle = styled.section`
  width: 100%;
  height: calc(var(--vh) * 100);
  
  pointer-events: none;
  
  position: fixed;
  top: 0;
  left: 0;
`

const UiSection = () => {
  return (
    <UiSectionStyle>
      <Modal/>
    </UiSectionStyle>
  )
}

export default UiSection
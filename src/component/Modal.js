import styled from "styled-components";
import Button from "./Button";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";

const ModalStyle = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  pointer-events: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
`

const ModalContent = styled.div`
  width: 100%;
  max-width: 600px;

  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
`

const Modal = ({isShow}) => {
  const uiDispatch = useUiDispatch()

  return isShow && (
    <ModalStyle onClick={() => uiDispatch({type : UI_ACTION_TYPE.modal_hide})}>
      <ModalContent>
        <Button onClick={() => uiDispatch({type : UI_ACTION_TYPE.modal_hide})}>닫기</Button>
      </ModalContent>
    </ModalStyle>
  )
}

Modal.defaultProps = {
  isShow: false
}

export default Modal
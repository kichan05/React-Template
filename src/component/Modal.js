import styled, {keyframes} from "styled-components";
import Button from "./Button";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import {useEffect, useState} from "react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

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

  animation-name: ${p => p.isShow ? fadeIn : fadeOut};
  animation-duration: 250ms;
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
  const [isAnimation, setIsAnimation] = useState(false)

  useEffect(() => {
    if (!isShow) {
      setIsAnimation(true)
      setTimeout(() => {
        setIsAnimation(false)
      }, 240)
    }
  }, [isShow])

  const closeModal = () => {
    uiDispatch({type: UI_ACTION_TYPE.modal_hide})
  }

  return (isShow || isAnimation) && (
    <ModalStyle onClick={closeModal} isShow={isShow}>
      <ModalContent>
        <Button onClick={closeModal}>닫기</Button>
      </ModalContent>
    </ModalStyle>
  )
}

Modal.defaultProps = {
  isShow: false
}

export default Modal
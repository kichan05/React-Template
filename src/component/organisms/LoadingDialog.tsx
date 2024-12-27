import LoadingSpinner from "../atoms/LoadingSpinner";
import {css, keyframes, styled} from "styled-components";
import {Title} from "../atoms/BasicLayout";
import {CSSTransition} from "react-transition-group";
import {fadeAnimation} from "../../animation/FadeAnimation";
import React from "react";

type LoadingDialogProps = {
  isShow: boolean,
  message: boolean
}

type LoadingDialogStyleProps = {
  state : string
}

const LoadingDialogStyle = styled.div<LoadingDialogStyleProps>`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.33);
  pointer-events: auto;

  ${fadeAnimation};

  .content {
    width: 300px;
    background-color: ${p => p.theme.color.Gray0};

    padding: 20px 0;
    border-radius: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const LoadingDialog : React.FC<LoadingDialogProps> = ({isShow, message}) => {
  return (
    <CSSTransition in={isShow} timeout={250} unmountOnExit>
      {state =>
        <LoadingDialogStyle state={state}>
          <div className="content">
            <LoadingSpinner size={50}/>
            <div className="spv-5"></div>
            <Title>{message}</Title>
          </div>
        </LoadingDialogStyle>
      }
    </CSSTransition>
  )
}

export default LoadingDialog;
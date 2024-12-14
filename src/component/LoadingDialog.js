import LoadingSpinner from "./LoadingSpinner";
import {css, keyframes, styled} from "styled-components";
import {Title} from "./BasicLayout";
import {CSSTransition} from "react-transition-group";
import {useEffect} from "react";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";

//todo: 애니메이션 만들어보자
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeAnimation = css`
  animation-duration: 260ms;

  ${({state}) => css`
    ${(state === "entering" || state === "enter") && css`
      animation-name: ${fadeIn};
    `}
    ${(state === "exiting" || state === "exit") && css`
      animation-name: ${fadeOut};
    `}
  `}
`

const sideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  
  100% {
    transform: translateY(0%);
  }
`

const sideUpAnimation = css`
  animation-duration: 260ms;

  ${({state}) => css`
    ${(state === "entering" || state === "enter") && css`
      animation-name: ${sideUp};
    `}
    ${(state === "exiting" || state === "exit") && css`
      animation-name: ${fadeOut};
    `}
  `}
`

const LoadingDialogStyle = styled.div`
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

const LoadingDialog = ({isShow, title}) => {
  return (
    <CSSTransition in={isShow} timeout={250} unmountOnExit>
      {state =>
        <LoadingDialogStyle state={state}>
          <div className="content">
            <LoadingSpinner size={50}/>
            <div className="spv-5"></div>
            <Title>잠시만 기다려주세요.</Title>
          </div>
        </LoadingDialogStyle>
      }
    </CSSTransition>
  )
}

export default LoadingDialog;
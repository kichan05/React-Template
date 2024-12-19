import {css, keyframes} from "styled-components";

const sideUp = keyframes`
  0% {
    transform: translateY(50px);
  }
  
  100% {
    transform: translateY(0%);
  }
`

const sideDown = keyframes`
  0% {
    transform: translateY(0%);
  }
  
  100% {
    transform: translateY(50px);
  }
`

export const verticalAnimation = css`
  animation-duration: 260ms;

  ${({state}) => css`
    ${(state === "entering" || state === "enter") && css`
      animation-name: ${sideUp};
    `}
    ${(state === "exiting" || state === "exit") && css`
      animation-name: ${sideDown};
    `}
  `}
`
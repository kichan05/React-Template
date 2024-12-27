//todo: 애니메이션 만들어보자
import {css, keyframes} from "styled-components";
import {AnimationState} from "../type";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const fadeAnimation = css<AnimationState>`
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
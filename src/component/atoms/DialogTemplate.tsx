import styled from "styled-components";
import {fadeAnimation} from "../../animation/FadeAnimation";
import {AnimationState} from "../../type";

export const DialogTemplate = styled.div<AnimationState>`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.33);
  pointer-events: auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: 0;
  
  ${fadeAnimation};
`
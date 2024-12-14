import {keyframes, styled} from "styled-components";

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border: 3px solid ${p => p.theme.color.Gray4};
  box-sizing: border-box;
  border-top-color: ${p => p.theme.color.Gray6};
  // border-bottom-color: ${p => p.theme.color.Gray6};
  border-radius: 100%;
  animation: ${spin} 1s linear infinite;
`;

export default LoadingSpinner;
import { keyframes, css } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 5%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const commonFadeInProps = css`
  animation-name: ${fadeInUp};
  animation-timing-function: ease-out;
  animation-duration: 700ms;
  animation-fill-mode: both;
`;

const theme = {
  commonFadeInProps,
};

export default theme;

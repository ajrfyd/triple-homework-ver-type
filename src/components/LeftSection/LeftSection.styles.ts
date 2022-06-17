import styled from "styled-components";

import logoSrc from "../../assets/triple2x.png";
// import commonStyles from "../../styles";

const Container = styled.div`
  // Box
  width: 400px;
  height: 338px;
  padding-top: 245px;
  margin-top: 10rem;

  // Background
  background-image: url(${logoSrc});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 300px;

  // font
  font-size: 15px;
  color: var(--color-light);
  text-align: center;

  // Animation
  ${({ theme }) => theme.commonFadeInProps}
  animation-delay: 100ms;
`;

export { Container };

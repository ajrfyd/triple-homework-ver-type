import styled, { css } from "styled-components";

interface SrcType {
  src: string;
}

const Container = styled.div`
  // Box
  display: flex;
  justify-content: space-evenly;

  // Animation
  ${({ theme }) => theme.commonFadeInProps}
  animation-delay: 400ms;
`;

const StoreContainer = styled.div<SrcType>`
  // Background
  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
      background-position: 0% 0%;
      background-size: 45px;
      background-repeat: no-repeat;
    `}

  // Box
  height:54px;
  flex: 1;
  padding-left: 3.2rem;

  // Font
  font-size: 14px;
  color: var(--color-light);
  font-weight: 700;
`;

export { Container, StoreContainer };

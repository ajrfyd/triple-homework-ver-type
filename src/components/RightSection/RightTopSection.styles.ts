import styled from "styled-components";

const Container = styled.div`
  // Box
  margin-bottom: 2rem;

  // Animation
  ${({ theme }) => theme.commonFadeInProps}
  animation-delay: 200ms;
`;

const TextContainer = styled.div`
  // Box
  margin: 0.5rem 0;

  // Font
  color: var(--color-normal);
  font-size: 36px;
  letter-spacing: -1px;
`;

export { Container, TextContainer };

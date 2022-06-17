import styled from "styled-components";

const RefreshButton = styled.button`
  position: absolute;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #3772fd;
  background-color: #fff;
  font-weight: bold;
  top: 90%;
  left: 50%;
  transform: translate(-50%);

  &:hover {
    transform: translate(-50%) scale(1.1);
  }

  &:active {
    transform: translate(-50%) scale(0.95);
    color: red;
  }
`;

export { RefreshButton };

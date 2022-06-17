import styled from "styled-components";

const Background = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.section`
  width: 100%;
  height: 512px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 412px;
  width: 1040px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export { Background, SectionContainer, Container };

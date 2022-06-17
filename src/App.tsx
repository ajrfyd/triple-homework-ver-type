import { ThemeProvider } from "styled-components";

import theme from "./styles";
import { Background, SectionContainer, Container } from "./App.styles";
import LeftSection from "./components/LeftSection/LeftSection";
import RightSection from "./components/RightSection/RightSection";
import Button from "./components/Button/Button";

const APP = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <SectionContainer>
          <Container>
            <LeftSection />
            <RightSection />
          </Container>
        </SectionContainer>
        <Button onClick={() => window.location.replace("/")}>Refresh</Button>
      </Background>
    </ThemeProvider>
  );
};

export default APP;

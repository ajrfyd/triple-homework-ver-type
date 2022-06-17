import { Container } from "./RightSection.styles";
import RightTopSection from "./RightTopSection";
import RightBottomSection from "./RightBottomSection";

const RightSection = () => {
  return (
    <Container>
      <RightTopSection />
      <RightBottomSection />
    </Container>
  );
};

export default RightSection;

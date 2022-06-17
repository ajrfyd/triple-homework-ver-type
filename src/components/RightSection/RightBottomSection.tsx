import data from "../../utils/data";

import { Container, StoreContainer } from "./RightBottomSection.styles";

const RightBottomSection = () => {
  return (
    <Container>
      {data.right.map((item) => (
        <StoreContainer key={item.id} src={item.img}>
          {item.text1}
          <br />
          {item.text2}
        </StoreContainer>
      ))}
    </Container>
  );
};

export default RightBottomSection;

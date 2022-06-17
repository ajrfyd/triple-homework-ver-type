import data from "../../utils/data";
import CountUp from "../CountUp/CountUp";

import { Container, TextContainer } from "./RightTopSection.styles";

const RightTopSection = () => {
  return (
    <Container>
      {data.left.map((item) => (
        <TextContainer key={item.id}>
          <strong>
            <span>
              <CountUp end={item.amount} />
            </span>
            {item.text1}
          </strong>
          {item.text2}
        </TextContainer>
      ))}
    </Container>
  );
};

export default RightTopSection;

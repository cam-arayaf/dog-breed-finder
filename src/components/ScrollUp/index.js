import { Wrapper } from "./styled";

const ScrollUp = () => (
  <Wrapper onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}>
    ↑
  </Wrapper>
);

export default ScrollUp;

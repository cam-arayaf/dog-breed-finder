import { Logo, Title, Wrapper } from "./styled";
import { logo } from "../../images";

const Header = () => (
  <Wrapper>
    <Logo alt="logo" src={logo} />
    <Title>Dog Breed Finder</Title>
  </Wrapper>
);

export default Header;

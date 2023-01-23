import {
  Card,
  Container,
  Image,
  Name,
  NoCheckedBreedsImage,
  NoCheckedBreedsMessage,
  NoCheckedBreedsWrapper,
  Title,
  Wrapper,
} from "./styled";
import { useDogServices } from "../../contexts";
import { checkedDog } from "../../images";

const BreedImages = () => {
  const { breedImages } = useDogServices();
  const checkedBreedImages = breedImages.filter(({ checked }) => checked);
  const hasCheckedBreedImages = !!checkedBreedImages.length;

  return (
    <Wrapper>
      <Title>Dog Breeds</Title>
      <Container>
        {!hasCheckedBreedImages && (
          <NoCheckedBreedsWrapper>
            <NoCheckedBreedsImage alt="checked-dog" src={checkedDog} />
            <NoCheckedBreedsMessage>
              Please select a dog breed
            </NoCheckedBreedsMessage>
          </NoCheckedBreedsWrapper>
        )}
        {hasCheckedBreedImages &&
          checkedBreedImages.map(({ key, link, value }, index) => (
            <Card key={`${key}/${index + 1}`}>
              <Image alt={value} src={link} />
              <Name>{value}</Name>
            </Card>
          ))}
      </Container>
    </Wrapper>
  );
};

export default BreedImages;

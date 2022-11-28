import BreedItem from "./BreedItem";
import { Title, WrapperBreeds } from "./styled";
import { useDogServices } from "../../contexts";

const BreedList = () => {
  const { breedList, refBreedList } = useDogServices();

  return (
    <WrapperBreeds ref={refBreedList}>
      <Title>Filters</Title>
      {breedList.map(({ key, value }) => (
        <BreedItem key={key} breedItem={{ key, value }} />
      ))}
    </WrapperBreeds>
  );
};

export default BreedList;

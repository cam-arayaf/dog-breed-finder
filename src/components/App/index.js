import { BreedImages, BreedList, Header, ScrollUp, Spinner } from "..";
import { useDogServices } from "../../contexts";
import { useWindowSize } from "../../hooks";
import { GlobalStyle } from "../../styles";

const App = () => {
  const { breedList, loadingBreedNames } = useDogServices();
  const { windowWidth } = useWindowSize();
  const renderBreedComponents = !loadingBreedNames && !!breedList.length;

  return (
    <>
      <GlobalStyle />
      <Header />
      {loadingBreedNames && <Spinner margin="64px auto 0" />}
      {renderBreedComponents && <BreedList />}
      {renderBreedComponents && <BreedImages />}
      {windowWidth <= 607 && <ScrollUp />}
    </>
  );
};

export default App;

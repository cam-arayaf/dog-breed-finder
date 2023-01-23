import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { node } from "prop-types";
import { useWindowSize } from "../hooks";
import {
  addBreedImages,
  getBreeds,
  hasBreedImages,
  hasBreedImagesChecked,
  modifyBreedImages,
} from "../utils";

export const DogServicesContext = createContext({
  loadingBreedNames: false,
  errorBreedNames: false,
  loadingSelectedBreed: "",
  errorSelectedBreed: "",
  breedList: [],
  breedImages: [],
  refBreedList: null,
  setPressedBreed: () => {},
});

export const useDogServices = () => useContext(DogServicesContext);

const DogServicesContextProvider = ({ children }) => {
  const initialPressedBreed = { checked: false, key: "", value: "" };
  const refBreedList = useRef(null);
  const [loadingBreedNames, setLoadingBreedNames] = useState(false);
  const [errorBreedNames, setErrorBreedNames] = useState(false);
  const [loadingSelectedBreed, setLoadingSelectedBreed] = useState("");
  const [errorSelectedBreed, setErrorSelectedBreed] = useState("");
  const [breedList, setBreedList] = useState([]);
  const [breedImages, setBreedImages] = useState([]);
  const [pressedBreed, setPressedBreed] = useState(initialPressedBreed);
  const { windowWidth } = useWindowSize();
  const hasImages = hasBreedImages(breedImages, pressedBreed.key);
  const hasImagesChecked = hasBreedImagesChecked(breedImages, pressedBreed);

  const getBreedNames = async () => {
    try {
      setLoadingBreedNames(true);
      setErrorBreedNames(false);
      const endpoint = `${process.env.REACT_APP_DOG_CEO_API_BASE_URL}/api/breeds/list/all`;
      const data = await fetch(endpoint);
      const response = await data.json();
      setLoadingBreedNames(false);
      const success = response.status === "success";
      setErrorBreedNames(!success);
      const names = success ? getBreeds(response.message) : [];
      setBreedList(names);
    } catch {
      setLoadingBreedNames(false);
      setErrorBreedNames(true);
      setBreedList([]);
    }
  };

  const callEndpointBreedImages = useCallback(async () => {
    try {
      const { key, value } = pressedBreed;
      setLoadingSelectedBreed(key);
      setErrorSelectedBreed("");
      const endpoint = `${process.env.REACT_APP_DOG_CEO_API_BASE_URL}/api/breed/${key}/images`;
      const data = await fetch(endpoint);
      const response = await data.json();
      setLoadingSelectedBreed("");
      const success = response.status === "success";
      setErrorSelectedBreed(success ? "" : key);
      const images = success ? response.message.slice(0, 3) : [];
      setBreedImages((i) => addBreedImages(i, images, key, value));
    } catch {
      const { key } = pressedBreed;
      setLoadingSelectedBreed("");
      setErrorSelectedBreed(key);
      setBreedImages([]);
    }
  }, [pressedBreed]);

  const mustCallEndpointBreedImages = useCallback(() => {
    const { key } = pressedBreed;
    const newBreeds = (prevState) => modifyBreedImages(prevState, true, key);
    return hasImages ? setBreedImages(newBreeds) : callEndpointBreedImages();
  }, [callEndpointBreedImages, hasImages, pressedBreed]);

  const getBreedImages = useCallback(() => {
    const { checked, key } = pressedBreed;
    const newBreeds = (prevState) => modifyBreedImages(prevState, false, key);
    return checked ? mustCallEndpointBreedImages() : setBreedImages(newBreeds);
  }, [mustCallEndpointBreedImages, pressedBreed]);

  const scrollToBreedImages = () => {
    const { offsetHeight } = refBreedList.current;
    window.scrollTo({ behavior: "smooth", top: offsetHeight });
  };

  useEffect(() => {
    getBreedNames();
  }, []);

  useEffect(() => {
    (() => !!pressedBreed.key && getBreedImages())();
  }, [getBreedImages, pressedBreed.key]);

  useEffect(() => {
    (() => windowWidth && hasImagesChecked && scrollToBreedImages())();
  }, [breedImages, hasImagesChecked, windowWidth]);

  return (
    <DogServicesContext.Provider
      value={{
        loadingBreedNames,
        errorBreedNames,
        loadingSelectedBreed,
        errorSelectedBreed,
        breedList,
        breedImages,
        refBreedList,
        setPressedBreed,
      }}
    >
      {children}
    </DogServicesContext.Provider>
  );
};

DogServicesContextProvider.propTypes = { children: node.isRequired };

export default DogServicesContextProvider;

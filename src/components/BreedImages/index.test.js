import { cleanup, render, screen } from "@testing-library/react";
import BreedImages from ".";
import { successBreedImages, successBreedNames } from "../../constants";
import { DogServicesContext } from "../../contexts";

describe("BreedImages component tests", () => {
  afterEach(() => cleanup());

  it("renders BreedImages with checked breed images", async () => {
    const [key] = Object.keys(successBreedNames.message);
    const [link] = successBreedImages.message;
    const value = `${key} - 1`;
    const breedImages = [{ checked: true, key, link, value }];

    render(
      <DogServicesContext.Provider value={{ breedImages }}>
        <BreedImages />
      </DogServicesContext.Provider>
    );

    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it("renders BreedImages without checked breed images", async () => {
    const noCheckedBreedsMessage = "Please select a dog breed";

    render(
      <DogServicesContext.Provider value={{ breedImages: [] }}>
        <BreedImages />
      </DogServicesContext.Provider>
    );

    expect(screen.getByText(noCheckedBreedsMessage)).toBeInTheDocument();
  });
});

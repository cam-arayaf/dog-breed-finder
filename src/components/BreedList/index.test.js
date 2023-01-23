import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import BreedList from ".";
import { successBreedNames } from "../../constants";
import { DogServicesContext } from "../../contexts";
import { getBreeds } from "../../utils";

describe("BreedList component tests", () => {
  afterEach(() => cleanup());

  const { message } = successBreedNames;
  const breedList = getBreeds(message);
  const [breed] = Object.keys(message);
  const refBreedList = { current: null };
  const setPressedBreed = jest.fn;

  it("renders BreedList with loading", () => {
    render(
      <DogServicesContext.Provider
        value={{
          breedList,
          loadingSelectedBreed: breed,
          refBreedList,
          setPressedBreed,
        }}
      >
        <BreedList />
      </DogServicesContext.Provider>
    );

    expect(screen.getByText(breed)).toBeInTheDocument();
  });

  it("renders BreedList without loading", () => {
    render(
      <DogServicesContext.Provider
        value={{
          breedList,
          loadingSelectedBreed: "",
          refBreedList,
          setPressedBreed,
        }}
      >
        <BreedList />
      </DogServicesContext.Provider>
    );

    const element = screen.getByText(breed);
    fireEvent.click(element);
    expect(element).toBeInTheDocument();
  });
});

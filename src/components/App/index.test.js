import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import App from ".";
import { successBreedImages, successBreedNames } from "../../constants";
import { DogServicesContextProvider } from "../../contexts";
import { getMockResolvedValue } from "../../utils";

describe("App component tests", () => {
  const { message } = successBreedNames;
  const [nameFirstBreed, secondBreed] = Object.keys(message);
  const nameSecondBreed = `${secondBreed} ${message[secondBreed][0]}`;
  const errorBreeds = { success: "error" };
  const milliseconds = 1000;
  const throwError = new Error("error");
  const title = "Dog Breed Finder";
  jest.useFakeTimers();
  window.innerWidth = 607;
  window.scrollTo = jest.fn;

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  it("renders App and called endpoints correctly", async () => {
    fetch.mockResolvedValueOnce(getMockResolvedValue(true, successBreedNames));
    fetch.mockResolvedValueOnce(getMockResolvedValue(true, successBreedImages));
    fetch.mockResolvedValueOnce(getMockResolvedValue(true, successBreedImages));

    render(
      <DogServicesContextProvider>
        <App />
      </DogServicesContextProvider>
    );

    await act(() => jest.advanceTimersByTime(milliseconds));
    const firstCheckbox = screen.getByText(nameFirstBreed);
    fireEvent.click(firstCheckbox);
    await act(() => jest.advanceTimersByTime(milliseconds));
    fireEvent.click(firstCheckbox);
    fireEvent.click(screen.getByText(nameSecondBreed));
    await act(() => jest.advanceTimersByTime(milliseconds));
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders App and called dog breed names endpoint with unhandled error", async () => {
    fetch.mockRejectedValueOnce(throwError);

    render(
      <DogServicesContextProvider>
        <App />
      </DogServicesContextProvider>
    );

    await act(() => jest.advanceTimersByTime(milliseconds));
    fireEvent.click(screen.getByText("↑"));
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders App and called dog breed images endpoint with unhandled error", async () => {
    fetch.mockResolvedValueOnce(getMockResolvedValue(true, successBreedNames));
    fetch.mockRejectedValueOnce(throwError);

    render(
      <DogServicesContextProvider>
        <App />
      </DogServicesContextProvider>
    );

    await act(() => jest.advanceTimersByTime(milliseconds));
    fireEvent.click(screen.getByText(nameFirstBreed));
    await act(() => jest.advanceTimersByTime(milliseconds));
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders App and called dog breed names endpoint with success response attribute with error value", async () => {
    fetch.mockResolvedValueOnce(getMockResolvedValue(false, errorBreeds));

    render(
      <DogServicesContextProvider>
        <App />
      </DogServicesContextProvider>
    );

    await act(() => jest.advanceTimersByTime(milliseconds));
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders App and called dog breed images endpoint with success response attribute with error value", async () => {
    fetch.mockResolvedValueOnce(getMockResolvedValue(true, successBreedNames));
    fetch.mockResolvedValueOnce(getMockResolvedValue(false, errorBreeds));

    render(
      <DogServicesContextProvider>
        <App />
      </DogServicesContextProvider>
    );

    await act(() => jest.advanceTimersByTime(milliseconds));
    fireEvent.click(screen.getByText(nameFirstBreed));
    await act(() => jest.advanceTimersByTime(milliseconds));
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});

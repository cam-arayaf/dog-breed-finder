import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components";
import { DogServicesContextProvider } from "./contexts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DogServicesContextProvider>
      <App />
    </DogServicesContextProvider>
  </StrictMode>
);

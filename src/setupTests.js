import "@testing-library/jest-dom";
global.fetch = require("jest-fetch-mock");
global.fetchMock = global.fetch;

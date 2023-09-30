import "@testing-library/jest-dom";

import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

window.alert = jest.fn();

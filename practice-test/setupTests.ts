import "@testing-library/jest-dom";
import { server } from "@/mocks/server";

import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

window.alert = jest.fn();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

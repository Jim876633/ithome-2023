import "@testing-library/jest-dom/vitest";
import createFetchMock from "vitest-fetch-mock";
import { server } from "@/mocks/server";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

window.alert = vi.fn();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

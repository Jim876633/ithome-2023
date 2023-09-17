import axios from "axios";
import fetchData from "./fetchData";

jest.mock("axios");

describe("testing fetchData function", () => {
  it("fetchData", async () => {
    axios.get.mockResolvedValue({ username: "Bret" });
    const data = await fetchData();
    expect(data).toBe("My name is Bret");
  });
});
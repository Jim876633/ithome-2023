// src/mocks/handlers.js
import { rest } from "msw";
import { faker } from "@faker-js/faker";

const fetchUserUrl = "https://jsonplaceholder.typicode.com/users";

const userArray = Array(10)
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  }));

export const fakerUserList = faker.helpers.arrayElements(userArray, {
  min: 2,
  max: 10,
});

export default [
  rest.get(fetchUserUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakerUserList));
  }),
];

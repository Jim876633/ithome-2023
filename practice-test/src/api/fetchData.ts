import { useQuery } from "@tanstack/react-query";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

type resType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const fetchUserData = async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data.map((user: resType) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));
  } catch (err) {
    return err;
  }
};

export const useFetchUserData = () =>
  useQuery<resType[]>(["getUser"], fetchUserData);

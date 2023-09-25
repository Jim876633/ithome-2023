import axios from "axios";

const fetchData = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  const content = `My name is ${data.username}`;
  return content;
}

export default fetchData;
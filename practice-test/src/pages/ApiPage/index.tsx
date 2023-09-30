import { useFetchUserData } from "@/api/fetchData";
import styled from "./index.module.scss";

export const ApiPage = () => {
  const { isLoading, data } = useFetchUserData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data) {
    return (
      <div>
        {data.map((el) => (
          <div key={el.id} className={styled.list}>
            <h3>{el.name}</h3>
            <p>{el.email}</p>
          </div>
        ))}
      </div>
    );
  }
};

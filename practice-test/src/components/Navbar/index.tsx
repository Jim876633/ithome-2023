import { Link } from "react-router-dom";
import styled from "./index.module.scss";

export const Navbar = () => {
  return (
    <ul className={styled.nav}>
      <Link to='/home'>
        Home
        <span style={{ margin: "0 .5rem" }}>|</span>
      </Link>
      <Link to='/home/form'>
        Form
        <span style={{ margin: "0 .5rem" }}>|</span>
      </Link>
      <Link to='/home/modal'>
        Modal
        <span style={{ margin: "0 .5rem" }}>|</span>
      </Link>
      <Link to='/home/api'>
        Api
        <span style={{ margin: "0 .5rem" }}>|</span>
      </Link>
      <Link to='/home/todo'>
        Todo
        <span style={{ margin: "0 .5rem" }}>|</span>
      </Link>
      <Link to='/home/itemList'>ItemList</Link>
    </ul>
  );
};

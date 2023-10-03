import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("testing home component", () => {
  it("show Home Page in the home component", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Home Page")).toBeTruthy(); //使用 getByText 判斷抓到文字的元素是否存在
  });
});

describe("testing home component", () => {
  it("show Home Page in the home component", () => {
    render(<Home />);
    render(<Home />);
    expect(screen.getAllByText("Home Page")).toHaveLength(2); //使用 getAllByText 一次判斷兩個 Home 元件元素是否存在
  });
});

describe("testing home component", () => {
  it("show Home Page in the home component", () => {
    render(<Home />);
    expect(screen.getByText("Home Page")).toBeInTheDocument(); // 判斷元素是否存在於 DOM 中
  });
});

describe("testing div", () => {
  it("test div className have 'hide'", () => {
    render(<div className='hide'>test</div>);
    expect(screen.getByText("test")).toHaveClass("hide"); //判斷元素是否含有指定的 class name
  });
});

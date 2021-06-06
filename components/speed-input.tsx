import { useState, useEffect } from "react";
import styled from "@emotion/styled";

interface speedInputTypes {
  updatedValue: (value: number) => any;
}

export default function SpeedInput({ updatedValue }: speedInputTypes) {
  const MainDiv = styled.div({
    width: "250px",
    height: "110px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    background: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0px 2px 2px #4747474c",
    padding: "0 4%",

    fontSize: "22px",
    fontWeight: "bold",
    color: "#504058",

    div: {
      display: "flex",
    },
  });
  const Button = styled.div({
    width: "45px",
    height: "45px",
    margin: "0 5px !important",
    background: " #fdd207",
    borderRadius: "6px",
    fontSize: "52px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  });
  const Counter = styled.div({
    width: "50px",
    fontSize: "24px",
    fontWeight: "600",

    borderRadius: "10px",
    border: "1px solid #000",
    margin: "0 10px",

    display: "flex",
    justifyContent: "center",
  });

  const [counter, setCounter] = useState(1);

  const handleClick = (oper: "+" | "-") => {
    if (oper == "+") {
      if (counter >= 5) return false;
      else setCounter(counter + 1);
    } else if (oper == "-") {
      if (counter <= 1) return false;
      else setCounter(counter - 1);
    }
  };

  useEffect(() => updatedValue(counter), [counter]);
  useEffect(() => updatedValue(counter), []);

  return (
    <MainDiv>
      <div>
        Скорость
        <Counter>
          <span>{counter}</span>
        </Counter>
        сек.
      </div>
      <div>
        <Button onClick={() => handleClick("-")}>
          <span>-</span>
        </Button>
        <Button onClick={() => handleClick("+")}>
          <span>+</span>
        </Button>
      </div>
    </MainDiv>
  );
}

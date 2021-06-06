import { useState, useEffect } from "react";

import styled from "@emotion/styled";

interface sliderType {
  arr: number[];
  label?: string;
  updatedValue: (value: number) => any;
}

export default function Slider({ arr, label, updatedValue }: sliderType) {
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

    h2: {
      margin: "0",
      fontSize: "22px",
      color: "#504058",
    },
    div: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      margin: "4% 0",
      fontWeight: "800",
      fontSize: "20px",
      color: "#3d3d3d",
    },
  });
  const Slider = styled.input(({ line }) => ({
    width: "100%",
    WebkitAppearance: "none",
    MozAppearance: "none",
    height: "10px",
    outline: "none",
    cursor: "pointer",
    borderRadius: "15px",
    background: `linear-gradient(to right, 
      #fdd207 0%, 
      #fdd207 ${(100 / arr.length + 1) * line}%, 
      #fff ${(100 / arr.length + 1) * line}%, 
      #fff 100%)`,

    // #fdd207
    "::-webkit-slider-runnable-track": {
      borderRadius: "15px",
    },
    "::-webkit-slider-thumb": {
      WebkitAppearance: "none",
      width: "18px",
      height: "18px",
      backgroundImage: "radial-gradient(circle , #000 30%,#fdd207 20%)",
      borderRadius: "50%",
    },
    ":focus": {
      outline: "none",
    },
  }));
  const Select = styled.span({
    color: " #fdd207",
  });

  const [inputValue, setInputValue] = useState(0);

  useEffect(() => updatedValue(arr[inputValue]), [inputValue]);
  useEffect(() => updatedValue(arr[inputValue]), []);

  const elements = arr.map((el, indx) => {
    if (arr[inputValue] === el) return <Select key={indx}>{el}</Select>;
    else return <span key={indx}>{el}</span>;
  });

  return (
    <MainDiv>
      <h2>{label}</h2>
      <div>{elements}</div>
      <Slider
        type="range"
        step={1}
        max={arr.length - 1}
        onChange={(e) => {
          setInputValue(Number(e.target.value));
          // console.log(inputValue);
        }}
        line={inputValue}
        step={1}
        value={inputValue}
      />
    </MainDiv>
  );
}

import { useDispatch } from "react-redux";
import {
  setWordCount,
  setStartDistancet,
  setLettersInWords,
  setStepDistance,
  setSpeed,
} from "../redux/actions";

import Head from "next/head";

import styled from "@emotion/styled";

import Slider from "../components/slider";
import SpeedInput from "../components/speed-input";
import ButtonLink from "../components/button-link";

export default function Home() {
  const dispatch = useDispatch();

  const InputGroup = styled.div({
    width: "800px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    div: {
      margin: "1%",
    },
  });
  const Main = styled.div({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f6f9ff",
  });

  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <Main>
        <InputGroup>
          <Slider
            arr={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            label="Сколько слов"
            updatedValue={(value) => dispatch(setWordCount(value))}
          />
          <Slider
            arr={[5, 10, 15, 20, 25, 30, 35, 40]}
            label="Стартовое расстояние"
            updatedValue={(value) => dispatch(setStartDistancet(value))}
          />
          <Slider
            arr={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            label="Сколько букв в словах"
            updatedValue={(value) => dispatch(setLettersInWords(value))}
          />
          <Slider
            arr={[5, 10, 15, 20, 25, 30, 35, 40]}
            label="Увеличение расстояния"
            updatedValue={(value) => dispatch(setStepDistance(value))}
          />
          <SpeedInput updatedValue={(value) => dispatch(setSpeed(value))} />
          <ButtonLink label="Старт" page="/game" />
        </InputGroup>
      </Main>
    </>
  );
}

import Head from "next/head";

import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import ButtonLink from "../components/button-link";

import styled from "@emotion/styled";

export default function Game() {
  const {
    wordsArr,
    lettersInWords,
    wordCount,
    startDistance,
    speed,
    stepDistance,
  } = useSelector((state) => state);

  const [wordsArrGame, setWordsArr] = useState(
    newRandomeArr(wordsArr, lettersInWords, wordCount)
  );
  const [distance, setDistance] = useState(startDistance);
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(
    splitStr(wordsArrGame[wordIndex])
  );
  const [winValue, setWinValue] = useState(false);
  const [count, setCount] = useState(0);

  const interval = useRef(undefined);

  useEffect(() => {
    if (wordsArrGame.length == 0) setWinValue(true);
    else {
      if (!interval.current) {
        interval.current = setInterval(
          () => setCount((count) => count + 1),
          speed * 1000
        );
      }
    }
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  // Основная логика
  useEffect(() => {
    setDistance(distance + stepDistance);
    if (wordIndex == wordsArrGame.length - 1) {
      setDistance(startDistance);
      setWordIndex(0);
    } else setWordIndex(wordIndex + 1);

    setCurrentWord(splitStr(wordsArrGame[wordIndex]));

    if (count >= wordCount * 3) {
      setWinValue(true);
      clearInterval(interval.current);
    }
  }, [count]);

  const Main = styled.div({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f6f9ff",
  });
  const GameMap = styled.div({
    fontSize: "24px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#3d3d3d",
  });
  const LeftLetters = styled.div((props) => ({
    transform: `translateX(-${props.margin}px)`,
  }));
  const RightLetters = styled.div((props) => ({
    transform: `translateX(${props.margin}px)`,
  }));
  const MiddleIcon = styled.div({
    fontSize: "64px",
    fontWeight: "bold",
  });
  const WinDIv = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    div: {
      fontSize: "26px",
      fontWeight: "bold",
    },
  });

  const winScreen = (
    <WinDIv>
      <div>Отличная работа!</div> <ButtonLink label="Меню" page="/" />
    </WinDIv>
  );
  const game = (
    <GameMap>
      <LeftLetters margin={distance}>{currentWord.start}</LeftLetters>
      <MiddleIcon>~</MiddleIcon>
      <RightLetters margin={distance}>{currentWord.end}</RightLetters>
    </GameMap>
  );

  return (
    <>
      <Head>
        <title>Game</title>
      </Head>
      <Main>{winValue ? winScreen : game}</Main>
    </>
  );
}

const shuffle = (arr: string[]) => arr.sort(() => Math.random() - 0.5); // Рандомайз для массива

const splitStr = (str: string) => {
  // разделитель строки
  if (!str) return false;
  const str_length = str.length;
  const str_arr = str.split("");

  const startStr = str_arr
    .filter((el, index) => index < str_length / 2)
    .join("");
  const endStr = str_arr
    .filter((el, index) => index >= str_length / 2)
    .join("");

  return { start: startStr, end: endStr };
};
const newRandomeArr = (arr: string[], сharacters: number, length: number) => {
  // фильтр массива
  const step1 = shuffle(arr.filter((str) => str.length == сharacters));
  if (step1.length == 0) {
    return [];
  } else if (length > arr.length) {
    return step1;
  } else {
    const step2 = step1.filter((str, indx) => indx <= length - 1);
    return step2;
  }
};

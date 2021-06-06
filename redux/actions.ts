import * as type from "./type";

export const setWordCount = (num: number) => ({
  type: type.UPDATE_WORD_COUNT,
  payload: num,
});
export const setStartDistancet = (num: number) => ({
  type: type.UPDATE_START_DISTANCE,
  payload: num,
});
export const setLettersInWords = (num: number) => ({
  type: type.UPDATE_LETTERS_IN_WORDS,
  payload: num,
});
export const setStepDistance = (num: number) => ({
  type: type.UPDATE_STEP_DISTANCE,
  payload: num,
});
export const setSpeed = (num: number) => ({
  type: type.UPDATE_SPEED,
  payload: num,
});

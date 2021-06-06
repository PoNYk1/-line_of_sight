import * as type from "./type";
import initState from "./init-state";

const reduser = (state = initState, action) => {
  switch (action.type) {
    case type.UPDATE_WORD_COUNT:
      return {
        ...state,
        wordCount: action.payload,
      };

    case type.UPDATE_START_DISTANCE:
      return {
        ...state,
        startDistance: action.payload,
      };

    case type.UPDATE_LETTERS_IN_WORDS:
      return {
        ...state,
        lettersInWords: action.payload,
      };

    case type.UPDATE_STEP_DISTANCE:
      return {
        ...state,
        stepDistance: action.payload,
      };

    case type.UPDATE_SPEED:
      return {
        ...state,
        speed: action.payload,
      };
    default:
      return state;
  }
};

export default reduser;

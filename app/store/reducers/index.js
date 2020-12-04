import {
  SET_PROBLEM_ID,
  SET_PROBLEM_COUNT,
  SET_MAX_VALUE,
  SET_SPEECH,
} from "../actions/types";

const initialState = {
  problemId: 0,
  numberOfProblems: 10,
  maxValue: {
    add: 10,
    sub: 10,
    multiDiv: 10,
  },
  speech: {
    state: false,
    speed: 2,
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PROBLEM_ID:
      return { ...state, problemId: payload };
    case SET_PROBLEM_COUNT:
      return { ...state, numberOfProblems: payload };
    case SET_MAX_VALUE:
      return { ...state, maxValue: payload };
    case SET_SPEECH:
      return { ...state, speech: payload };
    default:
      return initialState;
  }
};

export default reducer;

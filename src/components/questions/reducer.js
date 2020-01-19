import * as c from './constants';

const initialState = {
  fetchingQuestions: false,
  questions: [],
  questionError: null,
  page: 1,
};

const actionHandlers = {
  [c.GET_QUESTIONS_START]: (state, action) => {
    return {
      ...state,
      fetchingQuestions: true,
    };
  },
  [c.GET_QUESTIONS_SUCCESS]: (state, action) => {
    return {
      ...state,
      fetchingQuestions: false,
      questions: [...state.questions, ...action.questions],
      page: action.page,
      questionError: null,
    };
  },
  [c.GET_QUESTIONS_ERROR]: (state, action) => {
    return {
      ...state,
      fetchingQuestions: false,
      questionError: action.error,
    };
  },
};

export default (state = initialState, action) => {
  if (actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action);
  }
  return state;
};

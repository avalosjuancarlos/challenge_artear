import * as c from './constants';
import qs from 'qs';

const getQuestionsStart = () => ({
  type: c.GET_QUESTIONS_START,
});

const getQuestionsSuccess = (questions, page, limit) => ({
  type: c.GET_QUESTIONS_SUCCESS,
  questions,
  page,
  limit,
});

const getQuestionsError = error => ({
  type: c.GET_QUESTIONS_ERROR,
  error,
});

export const getQuestions = (page, limit) => async dispatch => {
  dispatch(getQuestionsStart());
  try {
    limit = limit && !isNaN(limit) && limit >= 20 && limit <= 100 ? limit : 20;
    const params = {
      page,
      limit,
    };
    const query = `http://5e16456b22b5c600140cf9bf.mockapi.io/api/v1/questions?${qs.stringify(
      params,
    )}`;
    const QuestionsResponse = await fetch(query);
    const questions = await QuestionsResponse.json();
    dispatch(getQuestionsSuccess(questions, page, limit));
  } catch (error) {
    dispatch(getQuestionsError(error));
    console.error(error);
  }
};

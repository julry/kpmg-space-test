import {getQuestionById} from "./getQuestionById";

export const getAnswerById = (planetId, questionId, answerId) => {
    return getQuestionById(planetId, questionId).answers.find(answer => answer.id === answerId);
};
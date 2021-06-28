import {getPlanetById} from "./getPlanetById";

export const getQuestionById = (planetId,id) => {
    return getPlanetById(planetId).questions.find(question => question.id === id);
};
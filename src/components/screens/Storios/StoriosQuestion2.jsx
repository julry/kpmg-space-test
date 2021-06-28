import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";
import {getPlanetById} from "../../../utils/getPlanetById";
import {getQuestionById} from "../../../utils/getQuestionById";

export const StoriosQuestion2 =  () => {
    return <QuestionWrapper planet={getPlanetById('2')} question={getQuestionById('2', '2')} />
}
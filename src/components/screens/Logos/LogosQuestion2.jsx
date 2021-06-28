import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";
import {getPlanetById} from "../../../utils/getPlanetById";
import {getQuestionById} from "../../../utils/getQuestionById";

export const LogosQuestion2 =  () => {
    return <QuestionWrapper planet={getPlanetById('1')} question={getQuestionById('1', '2')} />
}
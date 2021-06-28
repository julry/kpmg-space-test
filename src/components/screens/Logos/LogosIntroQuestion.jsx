import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";
import {getPlanetById} from "../../../utils/getPlanetById";

export const LogosIntroQuestion =  () => {
    return <QuestionWrapper planet={getPlanetById('1')} />
}
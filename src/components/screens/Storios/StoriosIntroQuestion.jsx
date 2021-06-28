import React from "react";
import {QuestionWrapper} from "../../QuestionWrapper";
import {getPlanetById} from "../../../utils/getPlanetById";

export const StoriosIntroQuestion =  () => {
    return <QuestionWrapper planet={getPlanetById('2')} />
}
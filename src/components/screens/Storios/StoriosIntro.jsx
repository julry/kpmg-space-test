import React from "react";
import {IntroPlanetWrapper} from "../../IntroPlanetWrapper";
import {getPlanetById} from "../../../utils/getPlanetById";

export const StoriosIntro = () => {
    return <IntroPlanetWrapper planet={getPlanetById('2')} />
}
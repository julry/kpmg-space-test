import React from "react";
import {IntroPlanetWrapper} from "../../IntroPlanetWrapper";
import {getPlanetById} from "../../../utils/getPlanetById";

export const LogosIntro = () => {
    return <IntroPlanetWrapper planet={getPlanetById('1')} />
}
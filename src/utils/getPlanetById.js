import {planets} from "../planets.config";

export const getPlanetById = (id) => {
    return planets.find(planet => planet.id === id);
};
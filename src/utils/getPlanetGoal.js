export const getPlanetGoal = (id) => {
    switch (id) {
        case "1":
            return 'first_planet'
        case "2":
            return 'second_planet'
        case "3":
            return 'third_planet'
        default:
            break;
    }
}
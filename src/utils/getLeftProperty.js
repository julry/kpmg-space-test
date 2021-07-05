export const getLeftProperty = (id) => {
    if (window.innerWidth < 340) {
        return (12 + (id - 1) * 85)
    } else if (window.innerWidth < 640) {
        return (12 + (id - 1) * 106);
    }
    else {
        return (12 + (id - 1) * 97);
    }
}
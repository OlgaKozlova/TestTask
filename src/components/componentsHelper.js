export function getClassList(obj) {
    return Object.entries(obj)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(' ');
}


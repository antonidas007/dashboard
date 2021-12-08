
export const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
};

export const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
    ] : [0, 0, 0];
};

export const getContrastColor = (hex: string) => {
    const triplet = hexToRgb(hex);
    let newtriplet;
    // black or white:
    let total = 0; for (let i = 0; i < triplet.length; i++) { total += triplet[i]; }
    if (total > (3 * 256 / 2)) {
        newtriplet = [0, 0, 0];
    } else {
        newtriplet = [255, 255, 255];
    }

    return 'rgb(' + newtriplet.join(',') + ')';
};

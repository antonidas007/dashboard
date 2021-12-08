
export const firstLetterUppercase = (str: string) => {
    if (!str || str.length === 1) {
        return str;
    }

    return str.substring(0, 1).toUpperCase() + str.substring(1);
};

export const getInitials = (str: string) => {
    const words = str.split(' ');

    if (words.length === 1) {
        return words[0].substr(0, 1);
    }

    if (words.length > 1) {
        return words[0].substr(0, 1) + words[words.length - 1].substr(0, 1);
    }

    return '';
};

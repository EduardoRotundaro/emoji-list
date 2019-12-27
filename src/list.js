const LIST = [
    { emoji: "👌🏿", tags: ['Ok'] },
    { emoji: "👌🏾", tags: ['Ok'] },
    { emoji: "👌🏽", tags: ['Ok'] },
    { emoji: "👌🏼", tags: ['Ok'] },
    { emoji: "👌🏻", tags: ['Ok'] },
    { emoji: "👌", tags: ['Ok'] },
];

export const EMOJI_LIST = LIST;

export const getEmoji = (index) => ((LIST[index] && LIST[index].emoji) || '');
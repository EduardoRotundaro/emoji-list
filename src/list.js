const LIST = [
    { emoji: "👌🏿", tags: ['Ok'] },
    { emoji: "👌🏾", tags: ['Ok'] },
    { emoji: "👌🏽", tags: ['Ok'] },
    { emoji: "👌🏼", tags: ['Ok'] },
    { emoji: "👌🏻", tags: ['Ok'] },
    { emoji: "👌", tags: ['Ok'] },
    { emoji: "👍🏿", tags: ['Thumbs Up', 'Like', 'Positive', 'Affirmative'] },
    { emoji: "👍🏾", tags: ['Thumbs Up', 'Like', 'Positive', 'Affirmative'] },
    { emoji: "👍🏽", tags: ['Thumbs Up', 'Like', 'Positive', 'Affirmative'] },
    { emoji: "👍🏼", tags: ['Thumbs Up', 'Like', 'Positive', 'Affirmative'] },
    { emoji: "👍🏻", tags: ['Thumbs Up', 'Like', 'Positive', 'Affirmative'] },
    { emoji: "👍", tags: ['Thumbs Up', 'Like', 'Positive', 'Affirmative'] },
    { emoji: "🙏🏿", tags: ['Folded Hands', 'Grace'] },
    { emoji: "🙏🏾", tags: ['Folded Hands', 'Grace'] },
    { emoji: "🙏🏽", tags: ['Folded Hands', 'Grace'] },
    { emoji: "🙏🏼", tags: ['Folded Hands', 'Grace'] },
    { emoji: "🙏🏻", tags: ['Folded Hands', 'Grace'] },
    { emoji: "🙏", tags: ['Folded Hands', 'Grace'] },
    { emoji: "🙌🏿", tags: ['Raised Hands', 'Hands Up'] },
    { emoji: "🙌🏾", tags: ['Raised Hands', 'Hands Up'] },
    { emoji: "🙌🏽", tags: ['Raised Hands', 'Hands Up'] },
    { emoji: "🙌🏼", tags: ['Raised Hands', 'Hands Up'] },
    { emoji: "🙌🏻", tags: ['Raised Hands', 'Hands Up'] },
    { emoji: "🙌", tags: ['Raised Hands', 'Hands Up'] },
];

export const EMOJI_LIST = LIST;

export const getEmoji = (index) => ((LIST[index] && LIST[index].emoji) || '');
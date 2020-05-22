export const updateTitleTag = function changeTitleTagToNameOfCurrentPage(currentPage) {
    const [, APP] = document.title.split(' | ');
    document.title = `${currentPage} | ${APP}`;
}

//TODO: Melhorar
const getEmoji = (index, sub) => {
    if(sub==='SMILEYS_PEOPLE') return ((SMILEYS_PEOPLE[index] && SMILEYS_PEOPLE[index].emoji) || '');
    if(sub==='ANIMALS_NATURE') return ((ANIMALS_NATURE[index] && ANIMALS_NATURE[index].emoji) || '');
    if(sub==='FOOD_DRINK') return ((FOOD_DRINK[index] && FOOD_DRINK[index].emoji) || '');
    if(sub==='ACTIVITY') return ((ACTIVITY[index] && ACTIVITY[index].emoji) || '');
    if(sub==='TRAVEL_PLACES') return ((TRAVEL_PLACES[index] && TRAVEL_PLACES[index].emoji) || '');
    if(sub==='OBJECTS') return ((OBJECTS[index] && OBJECTS[index].emoji) || '');
    if(sub==='SYMBOLS') return ((SYMBOLS[index] && SYMBOLS[index].emoji) || '');
    if(sub==='FLAGS') return ((FLAGS[index] && FLAGS[index].emoji) || '');
    return '';
}

//TODO: Melhorar
export const copyToClipBoard = (index) => {
    const emoji = getEmoji(index, sub);

    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = emoji;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    toast.success("✅ Copied!", { autoClose: 1500 });
}

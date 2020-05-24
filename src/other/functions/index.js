export const updateTitleTag = function changeTitleTagToNameOfCurrentPage(currentPage) {
    const [, APP] = document.title.split(' | ');
    document.title = `${currentPage} | ${APP}`;
}

export const copyToClipBoard = (content) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = content;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

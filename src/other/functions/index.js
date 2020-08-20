export const copyToClipBoard = (content) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = content;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

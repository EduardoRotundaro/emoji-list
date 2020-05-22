import {toast} from 'react-toastify';

const DEFAULT_TOAST_ERROR_MESSAGE = 'Something went wrong...';
const DEFAULT_TOAST_ERROR_ICON = '❌';
const DEFAULT_TOAST_SUCCESS_MESSAGE = 'Copied!';
const DEFAULT_TOAST_SUCCESS_ICON = '✅';
const DEFAULT_TOAST_OPTIONS = {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 4000,
    pauseOnHover: true,
    closeOnClick: true
}

const createToastContent = function buildToastContentWithMessageAndIcon(
    { icon, defaultIcon, message, defaultMessage }
){
    let content = '';
    content += (icon || defaultIcon);
    content += ' ';
    content += (message || defaultMessage);
    return content;
}

export function showErrorToast({ icon, message }) {
    const CONTENT = createToastContent({
        defaultIcon: DEFAULT_TOAST_ERROR_ICON,
        defaultMessage: DEFAULT_TOAST_ERROR_MESSAGE,
        icon, 
        message,
    });
    toast.error(CONTENT, DEFAULT_TOAST_OPTIONS);
}

export function showSuccessToast({ icon, message }) {
    const CONTENT = createToastContent({
        defaultIcon: DEFAULT_TOAST_SUCCESS_ICON,
        defaultMessage: DEFAULT_TOAST_SUCCESS_MESSAGE,
        icon, 
        message,
    });
    toast.success(CONTENT, DEFAULT_TOAST_OPTIONS);
}

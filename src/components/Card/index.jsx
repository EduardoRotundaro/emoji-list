import React from 'react';
import PropTypes from 'prop-types';

import {copyToClipBoard} from '../../other/functions';
import {showSuccessToast, showErrorToast} from '../../other/utils';

function Card({emoji}) {

    function ctrlC(emoji) {
        try {
            copyToClipBoard(emoji);
            showSuccessToast({});
        } catch (error) {
            console.error(error.message);
            showErrorToast({});
        }
    }

    return (
        <div className="" onClick={() => ctrlC(emoji)}>
            <figure>{emoji}</figure>
        </div>
    );
}

Card.propTypes = {
    emoji: PropTypes.string.isRequired,
};

export default Card;

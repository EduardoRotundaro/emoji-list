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
        <div className="card" onClick={() => ctrlC(emoji)}>
            <span className="card__emoji">{emoji}</span>
        </div>
    );
}

Card.propTypes = {
    emoji: PropTypes.string.isRequired,
};

export default Card;

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function Card({emoji}) {
    useEffect(() => {
    }, []);

    return (
        <div></div>
    );
}

Card.propTypes = {
    emoji: PropTypes.string.isRequired,
};

export default Card;

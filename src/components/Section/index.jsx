import React from 'react';
import PropTypes from 'prop-types';

import {StlSection} from './styles';

function Section ({emojiList}) {
    return (
        <StlSection></StlSection>
    );
}

Section.defaultProps = {
    emojiList: [],
};

Section.propTypes = {
    emojiList: PropTypes.array,
};

export default Section;

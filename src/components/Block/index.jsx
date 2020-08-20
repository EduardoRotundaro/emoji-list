import React from 'react';
import PropTypes from 'prop-types';

import {copyToClipBoard} from '../../other/functions';
import {StlBlock} from './styles';

function Block ({emoji, keyword, copyKeyword}) {
    return (
        <StlBlock
            onClick={() => copyToClipBoard(copyKeyword? keyword : emoji)}
        >
        </StlBlock>
    );
}

Block.defaultProps = {
    copyKeyword: true,
};

Block.propTypes = {
    emoji: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    copyKeyword: PropTypes.bool,
};

export default Block;

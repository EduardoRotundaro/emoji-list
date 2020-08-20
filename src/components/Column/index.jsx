import React from 'react';
import PropTypes from 'prop-types';

import {StlColumn} from './styles';

function Column ({children}) {
    return (
        <StlColumn>
            {children}
        </StlColumn>
    );
}

Column.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Column;

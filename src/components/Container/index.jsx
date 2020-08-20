import React from 'react';
import PropTypes from 'prop-types';

import {StlContainer} from './styles';

function Container ({children}) {
    return (
        <StlContainer>
            {children}
        </StlContainer>
    );
}

Container.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Container;

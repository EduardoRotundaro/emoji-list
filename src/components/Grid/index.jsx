import React from 'react';
import PropTypes from 'prop-types';

import {StlGrid} from './styles';

function Grid ({
    total,
    fill,
    fillInXS,
    fillInSM,
    fillInMD,
    fillInLG,
    fillInXL,
    fillInHD,
    alignVertically,
    alignHorizontally,
}) {
    return (
        <StlGrid>
        </StlGrid>
    );
}

Grid.defaultProps = {
    total: 1,
    fill: 1,
    alignVertically: 'top',
    alignHorizontally: 'left',
};

Grid.propTypes = {
    total: PropTypes.number,
    fill: PropTypes.number,
    fillInXS: PropTypes.number,
    fillInSM: PropTypes.number,
    fillInMD: PropTypes.number,
    fillInLG: PropTypes.number,
    fillInXL: PropTypes.number,
    fillInHD: PropTypes.number,
    alignVertically: PropTypes.string,
    alignHorizontally: PropTypes.string,
};

export default Grid;

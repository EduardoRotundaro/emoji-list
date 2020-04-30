import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function List({list}) {
    useEffect(() => {
    }, []);

    return (
        <section></section>
    );
}

List.propTypes = {
    emoji: PropTypes.array.isRequired,
};

export default List;

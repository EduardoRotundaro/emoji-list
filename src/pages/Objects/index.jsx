import React, {useEffect} from 'react';

import {OBJECTS_LIST} from '../../assets/constants';
import {updateTitleTag} from '../../other/functions';

function Objects() {
    useEffect(() => {
        updateTitleTag('Objects');
    }, []);

    return (
        <section className="">
            objects
        </section>
    );
}

export default Objects;

import React, {useEffect} from 'react';

import {ANIMALS_NATURE_LIST} from '../../assets/constants';
import {updateTitleTag} from '../../other/functions';

function AnimalsNature() {
    useEffect(() => {
        updateTitleTag('Animals & Nature');
    }, []);

    return (
        <section className="">
            animals/nature
        </section>
    );
}

export default AnimalsNature;

import React, {useEffect} from 'react';

import {FLAGS_LIST} from '../../assets/constants';
import {updateTitleTag} from '../../other/functions';

function Flags() {
    useEffect(() => {
        updateTitleTag('Flags')
    }, []);

    return (
        <section className="">
            flags
        </section>
    );
}

export default Flags;

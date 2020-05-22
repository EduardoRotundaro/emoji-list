import React, {useEffect} from 'react';

import {SYMBOLS_LIST} from '../../assets/constants';
import {updateTitleTag} from '../../other/functions';

function Symbols() {
    useEffect(() => {
        updateTitleTag('Symbols');
    }, []);

    return (
        <section className="">
            symbols
        </section>
    );
}

export default Symbols;

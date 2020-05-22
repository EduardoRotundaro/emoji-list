import React, {useEffect} from 'react';

import {SMILEYS_PEOPLE_LIST} from '../../assets/constants';
import {updateTitleTag} from '../../other/functions';

function SmileysPeople() {
    useEffect(() => {
        updateTitleTag('Smileys & People');
    }, []);

    return (
        <section className="">
            smileys/people
        </section>
    );
}

export default SmileysPeople;

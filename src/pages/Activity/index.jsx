import React, {useEffect} from 'react';

import {ACTIVITY_LIST} from '../../assets/constants';
import {updateTitleTag} from '../../other/functions';

function Activity() {
    useEffect(() => {
        updateTitleTag('Activity');
    }, []);

    return (
        <section className="">
            activity
        </section>
    );
}

export default Activity;

import React, {useEffect} from 'react';

import {updateTitleTag} from '../../other/functions';

function NotFound() {
    useEffect(() => {
        updateTitleTag('404')
    }, []);

    return (
        <section className="">
            404
        </section>
    );
}

export default NotFound;

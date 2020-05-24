import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {updateTitleTag} from '../../other/functions';
import {SmileyConfusedIcon} from '../../assets/icons';

function NotFound() {
    useEffect(() => {
        updateTitleTag('404');
    }, []);

    return (
        <section className="">
            404
            <figure>
                <SmileyConfusedIcon />
            </figure>
            <Link to="/emoji-list" >Go back to home</Link>
        </section>
    );
}

export default NotFound;

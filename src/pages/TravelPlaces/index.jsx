import React, {useEffect} from 'react';

import {TRAVEL_PLACES_LIST} from '../../assets/constants';
import {updateTitleTag} from '../../other/functions';

function TravelPlaces() {
    useEffect(() => {
        updateTitleTag('Travel & Places');
    }, []);

    return (
        <section className="">
            travel/places
        </section>
    );
}

export default TravelPlaces;

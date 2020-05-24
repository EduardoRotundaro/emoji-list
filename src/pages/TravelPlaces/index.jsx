import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {TRAVEL_PLACES_LIST} from '../../assets/constants';
import {CarIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return TRAVEL_PLACES_LIST.map(( { emoji }, index ) => (
        <Card emoji={emoji} key={`travel_places_${index}`} />
    ));
}

function TravelPlaces() {
    useEffect(() => {
        updateTitleTag('Travel & Places');
    }, []);

    function renderEmojiList() {
        try {
            const cardsArr = renderListIntoCards();
            return cardsArr;
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <section className="">
            <div>
                <figure>
                    <CarIcon />
                </figure>
            </div>
            <div>
                {renderEmojiList()}
            </div>
        </section>
    );
}

export default TravelPlaces;

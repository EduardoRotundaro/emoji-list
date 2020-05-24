import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {OBJECTS_LIST} from '../../assets/constants';
import {LampIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return OBJECTS_LIST.map(( { emoji }, index ) => (
        <Card emoji={emoji} key={`objects_${index}`} />
    ));
}

function Objects() {
    useEffect(() => {
        updateTitleTag('Objects');
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
                    <LampIcon />
                </figure>
            </div>
            <div>
                {renderEmojiList()}
            </div>
        </section>
    );
}

export default Objects;

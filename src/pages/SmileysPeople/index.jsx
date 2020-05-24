import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {SMILEYS_PEOPLE_LIST} from '../../assets/constants';
import {SmileyIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return SMILEYS_PEOPLE_LIST.map(( { emoji }, index ) => (
        <Card emoji={emoji} key={`smileys_people_${index}`} />
    ));
}

function SmileysPeople() {
    useEffect(() => {
        updateTitleTag('Smileys & People');
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
                    <SmileyIcon />
                </figure>
            </div>
            <div>
                {renderEmojiList()}
            </div>
        </section>
    );
}

export default SmileysPeople;

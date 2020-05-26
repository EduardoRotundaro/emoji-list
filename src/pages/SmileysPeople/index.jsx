import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {SMILEYS_PEOPLE_LIST} from '../../assets/constants';
import {SmileyIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return SMILEYS_PEOPLE_LIST.map(( { emoji }, index ) => (
        <div className="block__column--auto" key={`smileys_people_${index}`}>
            <Card emoji={emoji} />
        </div>
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
        <section className="page">
            <div className="block">
                <div className="block__row">
                    <div className="block__column--10">
                        <h2 className="page__title">
                            <figure>
                                <SmileyIcon />
                            </figure>
                        </h2>
                    </div>
                </div>
                <div className="block__row emoji-list">
                    {renderEmojiList()}
                </div>
            </div>
        </section>
    );
}

export default SmileysPeople;

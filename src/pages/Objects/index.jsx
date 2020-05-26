import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {OBJECTS_LIST} from '../../assets/constants';
import {LampIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return OBJECTS_LIST.map(( { emoji }, index ) => (
        <div className="block__column--auto" key={`objects_${index}`}>
            <Card emoji={emoji} />
        </div>
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
        <section className="page">
            <div className="block">
                <div className="block__row">
                    <div className="block__column--10">
                        <h2 className="page__title">
                            <figure>
                                <LampIcon />
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

export default Objects;

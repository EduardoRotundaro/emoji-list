import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {ANIMALS_NATURE_LIST} from '../../assets/constants';
import {BearIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return ANIMALS_NATURE_LIST.map(( { emoji }, index ) => (
        <div className="block__column--auto" key={`animals_nature_${index}`}>
            <Card emoji={emoji} />
        </div>
    ));
}

function AnimalsNature() {
    useEffect(() => {
        updateTitleTag('Animals & Nature');
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
                                <BearIcon />
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

export default AnimalsNature;

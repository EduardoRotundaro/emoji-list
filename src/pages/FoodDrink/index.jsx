import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {FOOD_DRINK_LIST} from '../../assets/constants';
import {CupIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return FOOD_DRINK_LIST.map(( { emoji }, index ) => (
        <div className="block__column--auto" key={`food_drink_${index}`}>
            <Card emoji={emoji} />
        </div>
    ));
}

function FoodDrink() {
    useEffect(() => {
        updateTitleTag('Food & Drink');
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
                                <CupIcon />
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

export default FoodDrink;

import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {FOOD_DRINK_LIST} from '../../assets/constants';
import {CupIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return FOOD_DRINK_LIST.map(( { emoji }, index ) => (
        <Card emoji={emoji} key={`food_drink_${index}`} />
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
        <section className="">
            <div>
                <figure>
                    <CupIcon />
                </figure>
            </div>
            <div>
                {renderEmojiList()}
            </div>
        </section>
    );
}

export default FoodDrink;

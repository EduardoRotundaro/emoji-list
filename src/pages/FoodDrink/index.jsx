import React, {useEffect} from 'react';

import {FOOD_DRINK_LIST} from '../../assets/constants';
import {updateTitleTag} from '../../other/functions';

function FoodDrink() {
    useEffect(() => {
        updateTitleTag('Food & Drink');
    }, []);

    return (
        <section className="">
            food/drink
        </section>
    );
}

export default FoodDrink;

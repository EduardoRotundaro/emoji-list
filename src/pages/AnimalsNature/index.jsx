import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {ANIMALS_NATURE_LIST} from '../../assets/constants';
import {BearIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return ANIMALS_NATURE_LIST.map(( { emoji }, index ) => (
        <Card emoji={emoji} key={`animals_nature_${index}`} />
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
        <section className="">
            <div>
                <figure>
                    <BearIcon />
                </figure>
            </div>
            <div>
                {renderEmojiList()}
            </div>
        </section>
    );
}

export default AnimalsNature;

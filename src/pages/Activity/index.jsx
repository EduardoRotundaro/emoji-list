import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {ACTIVITY_LIST} from '../../assets/constants';
import {BallIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return ACTIVITY_LIST.map(( { emoji }, index ) => (
        <Card emoji={emoji} key={`activity_${index}`} />
    ));
}

function Activity() {
    useEffect(() => {
        updateTitleTag('Activity');
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
                    <BallIcon />
                </figure>
            </div>
            <div>
                {renderEmojiList()}
            </div>
        </section>
    );
}

export default Activity;

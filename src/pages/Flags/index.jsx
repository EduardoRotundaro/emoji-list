import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {FLAGS_LIST} from '../../assets/constants';
import {FlagIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return FLAGS_LIST.map(( { emoji }, index ) => (
        <Card emoji={emoji} key={`flags_${index}`} />
    ));
}

function Flags() {
    useEffect(() => {
        updateTitleTag('Flags')
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
                    <FlagIcon />
                </figure>
            </div>
            <div>
                {renderEmojiList()}
            </div>
        </section>
    );
}

export default Flags;

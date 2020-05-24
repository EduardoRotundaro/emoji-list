import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {SYMBOLS_LIST} from '../../assets/constants';
import {SymbolIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return SYMBOLS_LIST.map(( { emoji }, index ) => (
        <Card emoji={emoji} key={`symbols_${index}`} />
    ));
}

function Symbols() {
    useEffect(() => {
        updateTitleTag('Symbols');
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
                    <SymbolIcon />
                </figure>
            </div>
            <div>
                {renderEmojiList()}
            </div>
        </section>
    );
}

export default Symbols;

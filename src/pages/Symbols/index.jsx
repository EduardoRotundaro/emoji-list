import React, {useEffect} from 'react';

import Card from '../../components/Card';
import {SYMBOLS_LIST} from '../../assets/constants';
import {SymbolIcon} from '../../assets/icons';
import {updateTitleTag} from '../../other/functions';

function renderListIntoCards() {
    return SYMBOLS_LIST.map(( { emoji }, index ) => (
        <div className="block__column--auto" key={`symbols_${index}`}>
            <Card emoji={emoji} />
        </div>
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
        <section className="page">
            <div className="block">
                <div className="block__row">
                    <div className="block__column--10">
                        <h2 className="page__title">
                            <figure>
                                <SymbolIcon />
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

export default Symbols;

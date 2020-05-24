import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {updateTitleTag} from '../../other/functions';
import {
    SmileyIcon,
    BearIcon,
    CupIcon,
    BallIcon,
    CarIcon,
    LampIcon,
    SymbolIcon,
    FlagIcon,
} from '../../assets/icons';

function Home() {
    useEffect(() => {
        updateTitleTag('Easily copy emojis!');
    }, []);

    return (
        <section className="">
            <Link to="/emoji-list/smileys-people">
                <figure>
                    <SmileyIcon />
                </figure>
                Smileys and People
            </Link>
            <Link to="/emoji-list/animals-nature">
                <figure>
                    <BearIcon />
                </figure>
                Animals and Nature
            </Link>
            <Link to="/emoji-list/food-drink">
                <figure>
                    <CupIcon />
                </figure>
                Food and Drink
            </Link>
            <Link to="/emoji-list/activity">
                <figure>
                    <BallIcon />
                </figure>
                Activity
            </Link>
            <Link to="/emoji-list/travel-places">
                <figure>
                    <CarIcon />
                </figure>
                Travel and Places
            </Link>
            <Link to="/emoji-list/objects">
                <figure>
                    <LampIcon />
                </figure>
                Objects
            </Link>
            <Link to="/emoji-list/symbols">
                <figure>
                    <SymbolIcon />
                </figure>
                Symbols
            </Link>
            <Link to="/emoji-list/flags">
                <figure>
                    <FlagIcon />
                </figure>
                Flags    
            </Link>
        </section>
    );
}

export default Home;

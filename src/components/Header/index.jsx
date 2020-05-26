import React from 'react';
import {Link} from 'react-router-dom';

import {SmileyCoolIcon} from '../../assets/icons';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
                Emoji List
                <figure className="header__logo"><SmileyCoolIcon /></figure>
            </h1>
            <nav className="header__navbar">
                <ul className="menu">
                    <li className="menu__item">
                        <Link to="/emoji-list/activity">Activity</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/emoji-list/animals-nature">Animals / Nature</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/emoji-list/flags">Flags</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/emoji-list/food-drink">Food / Drink</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/emoji-list/objects">Objects</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/emoji-list/smileys-people">Smileys / People</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/emoji-list/symbols">Symbols</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/emoji-list/travel-places">Travel / Places</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

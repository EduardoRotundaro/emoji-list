import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ol>
                <li>
                    <Link to="/emoji-list/activity">TO: activity</Link>
                </li>
                <li>
                    <Link to="/emoji-list/animals-nature">TO: animals-nature</Link>
                </li>
                <li>
                    <Link to="/emoji-list/flags">TO: flags</Link>
                </li>
                <li>
                    <Link to="/emoji-list/food-drink">TO: food-drink</Link>
                </li>
                <li>
                    <Link to="/emoji-list/objects">TO: objects</Link>
                </li>
                <li>
                    <Link to="/emoji-list/smileys-people">TO: smileys-people</Link>
                </li>
                <li>
                    <Link to="/emoji-list/symbols">TO: symbols</Link>
                </li>
                <li>
                    <Link to="/emoji-list/travel-places">TO: travel-places</Link>
                </li>
            </ol>
        </nav>
    );
}

export default NavBar;

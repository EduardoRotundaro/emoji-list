import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import List from './List';

import {
    SMILEYS_PEOPLE_LIST,
    ANIMALS_NATURE_LIST,
    FOOD_DRINK_LIST,
    ACTIVITY_LIST,
    TRAVEL_PLACES_LIST,
    OBJECTS_LIST,
    SYMBOLS_LIST,
    FLAGS_LIST
} from './emojis';

export default props => (
    <Router>
        <div className="bg-danger text-center">
            <h1 className="text-white mb-0 pb-1 pt-3"><b>EMOJI LIST</b>&nbsp;<span role="img" aria-label="Vulcan salute">🖖🏻</span></h1>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
            <div className="navbar-brand"><span role="img" aria-label="Select a category">👉🏻</span></div>
            <div className="navbar-nav">
                <Link to="/smileys-people" className="nav-item nav-link">Smileys/People</Link>
                <Link to="/animals-nature" className="nav-item nav-link">Animals/Nature</Link>
                <Link to="/food-drink" className="nav-item nav-link">Food/Drink</Link>
                <Link to="/activity" className="nav-item nav-link">Activity</Link>
                <Link to="/travel-places" className="nav-item nav-link">Travel/Places</Link>
                <Link to="/objects" className="nav-item nav-link">Objects</Link>
                <Link to="/symbols" className="nav-item nav-link">Symbols</Link>
                <Link to="/flags" className="nav-item nav-link">Flags</Link>
            </div>
        </nav>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="alert alert-light shadow-sm">
                        <span role="img" aria-label="Click">👆🏻</span>&nbsp;Click on the Emoji to copy it&nbsp;<span role="img" aria-label="Vulcan salute">❕</span>
                    </div>
                </div>
            </div>
        </div>
        <Switch>
            <Route exact path="/">
                <Redirect to="/smileys-people"/>
            </Route>
            <Route path="/emoji-list/">
                <Redirect to="/smileys-people"/>
            </Route>
            <Route path="/smileys-people">
                <List content={SMILEYS_PEOPLE_LIST} sub="SMILEYS_PEOPLE"/>
            </Route>
            <Route path="/animals-nature">
                <List content={ANIMALS_NATURE_LIST} sub="ANIMALS_NATURE"/>
            </Route>
            <Route path="/food-drink">
                <List content={FOOD_DRINK_LIST} sub="FOOD_DRINK"/>
            </Route>
            <Route path="/activity">
                <List content={ACTIVITY_LIST} sub="ACTIVITY"/>
            </Route>
            <Route path="/travel-places">
                <List content={TRAVEL_PLACES_LIST} sub="TRAVEL_PLACES"/>
            </Route>
            <Route path="/objects">
                <List content={OBJECTS_LIST} sub="OBJECTS"/>
            </Route>
            <Route path="/symbols">
                <List content={SYMBOLS_LIST} sub="SYMBOLS"/>
            </Route>
            <Route path="/flags">
                <List content={FLAGS_LIST} sub="FLAGS"/>
            </Route>
        </Switch>
        <footer>
            <div className="container border-top mt-2">
                <div className="row justify-content-center mt-3">
                    <div className="col-auto">
                        <a className="btn btn-sm btn-danger" href="https://github.com/EduardoRotundaro/emoji-list" target="_blank" rel="noopener noreferrer">&#9733;&nbsp;Github</a>
                    </div>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className="col-auto">
                        <span className="footer-version">v1.0.2</span>
                    </div>
                </div>
            </div>
        </footer>
    </Router>
);

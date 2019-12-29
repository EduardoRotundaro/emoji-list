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
    SMILEYS_PEOPLE_LIST
} from './emojis';

export default props => (
    <Router>
        <div className="bg-danger text-center">
            <h3 className="text-white mb-0 pt-2"><b>EMOJI LIST</b>&nbsp;<span role="img" aria-label="Vulcan salute">🖖🏻</span></h3>
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
        <Switch>
            <Route exact path="/">
                <Redirect to="/smileys-people"/>
            </Route>
            <Route path="/smileys-people">
                <List content={SMILEYS_PEOPLE_LIST} sub="SMILEYS_PEOPLE"/>
            </Route>
            <Route path="/animals-nature">
                Animals/Nature
            </Route>
            <Route path="/food-drink">
                Food/Drink
            </Route>
            <Route path="/activity">
                Activity
            </Route>
            <Route path="/travel-places">
                Travel/Places
            </Route>
            <Route path="/objects">
                Objects
            </Route>
            <Route path="/symbols">
                Symbols
            </Route>
            <Route path="/flags">
                Flags
            </Route>
        </Switch>
    </Router>
);

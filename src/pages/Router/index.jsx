import React from 'react';
import { Switch, Route } from "react-router-dom";

import Activity from '../Activity';
import AnimalsNature from '../AnimalsNature';
import Flags from '../Flags';
import FoodDrink from '../FoodDrink';
import Home from '../Home';
import NotFound from '../NotFound';
import Objects from '../Objects';
import SmileysPeople from '../SmileysPeople';
import Symbols from '../Symbols';
import TravelPlaces from '../TravelPlaces';

function Router() {
    return (
        <Switch>
            <Route exact path="/emoji-list">
                <Home />
            </Route>
            <Route path="/emoji-list/activity">
                <Activity />
            </Route>
            <Route path="/emoji-list/animals-nature">
                <AnimalsNature />
            </Route>
            <Route path="/emoji-list/flags">
                <Flags />
            </Route>
            <Route path="/emoji-list/food-drink">
                <FoodDrink />
            </Route>
            <Route path="/emoji-list/objects">
                <Objects />
            </Route>
            <Route path="/emoji-list/smileys-people">
                <SmileysPeople />
            </Route>
            <Route path="/emoji-list/symbols">
                <Symbols />
            </Route>
            <Route path="/emoji-list/travel-places">
                <TravelPlaces />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Router;

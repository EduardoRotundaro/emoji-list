import React from 'react';
import {BrowserRouter} from "react-router-dom";

import NavBar from './components/NavBar';
import Router from './pages/Router';

function App() {
    return (
        <BrowserRouter>
            <header>
                <NavBar />
            </header>
            <main>
                <Router />
            </main>
            <footer></footer>
        </BrowserRouter>
    );
}

export default App;

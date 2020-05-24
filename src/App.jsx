import React from 'react';
import {BrowserRouter} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Router from './pages/Router';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Router />
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

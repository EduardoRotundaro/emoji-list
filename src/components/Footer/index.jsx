import React from 'react';

import {APP_VERSION, AUTHOR} from '../../assets/constants';
import {StarIcon} from '../../assets/icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="block">
                <div className="block__row">
                    <div className="block__column--10">
                        <div className="footer__author">
                            Feito por <a href="https://github.com/EduardoRotundaro" target="_blank" rel="noopener noreferrer">{AUTHOR}</a>
                        </div>
                    </div>
                </div>
                <div className="block__row">
                    <div className="block__column--10">
                        <a className="footer__repository" href="https://github.com/EduardoRotundaro/emoji-list" target="_blank" rel="noopener noreferrer">
                            <figure>
                                <StarIcon />
                            </figure>
                            Github
                        </a>
                    </div>
                </div>
                <div className="block__row">
                    <div className="block__column--10">
                        <small className="footer__version">v{APP_VERSION}</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

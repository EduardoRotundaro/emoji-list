import React from 'react';

import {APP_VERSION, AUTHOR} from '../../assets/constants';
import {StarIcon} from '../../assets/icons';

function Footer() {
    return (
        <footer>
            <div>
                <div>
                    Feito por <a href="https://github.com/EduardoRotundaro" target="_blank" rel="noopener noreferrer">{AUTHOR}</a>
                </div>
                <div>
                    <a href="https://github.com/EduardoRotundaro/emoji-list" target="_blank" rel="noopener noreferrer">
                        <figure>
                            <StarIcon />
                        </figure>
                        Github
                    </a>
                </div>
                <div>
                    <small>v{APP_VERSION}</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

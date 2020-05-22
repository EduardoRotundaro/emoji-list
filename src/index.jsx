import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';

import './assets/sass/main.scss';

import App from './App';

toast.configure();

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>, 
    document.getElementById('root')
);

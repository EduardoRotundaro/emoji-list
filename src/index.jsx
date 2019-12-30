import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

import App from './App';

toast.configure();

ReactDOM.render(<App />, document.getElementById('root'));
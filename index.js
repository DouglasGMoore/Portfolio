import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

import * as states from './store';

import { capitalize } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';

// router is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);


const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Main(state)}
    ${Footer(state)}
`;

    router.updatePageLinks();
}


function  handleRoutes(params){
    render(states[capitalize(params.path)]);
}

router
    .on(':path', (handleRoutes))
    .on('/', () => render(states.Welcome))
    .resolve();

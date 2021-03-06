import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App/App';
import Home from './containers/Home/Home';

export default (
    <Router history={hashHistory}>
        <Route path="**" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
);
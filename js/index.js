require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var App = require('./components/contact-page/app');
var ContactContainer = require('./components/contact-page/contact-container');
var ContactListContainer = require('./components/contact-page/contact-list-container');

var EmailApp = require('./components/email-page/email-app');
var EmailListContainer = require('./components/email-page/email-list-container');
var EmailList = require('./components/email-page/email-list');
// var SpamlList = require('./components/email-page/spam-list');
// var InboxContainer = require('./components/email-page/inbox-container');
// var SpamContainer = require('./components/email-page/spam-container');

var routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
        	<IndexRoute component={ContactListContainer} />
        	<Route path=':contactId' component={ContactContainer} />
        </Route>
        <Route path='/email' component={EmailApp}>
        	<IndexRoute components={EmailListContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});

var React = require('react');

var ContactList = require('./contact-list');
var CONTACTS = require('../contacts');

var ContactListContainer = function() {
    return <ContactList contacts={CONTACTS} />
};

module.exports = ContactListContainer;
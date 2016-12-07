var React = require('react');

var EmailList = require('./email-list');
var SpamList = require('./spam-list');
var EMAILS = require('../../emails');

var EmailListContainer = function(props) {
	// console.log(props);

	return (
		<div className='container'>
			<h2>Inbox</h2>
				<EmailList inbox={EMAILS.inbox} />
			<h2>Spam</h2>
				<SpamList spam={EMAILS.spam} />
		</div>
	)
}

module.exports = EmailListContainer;
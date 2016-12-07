var React = require('react');
var Navbar = require('./navbar');

var EmailApp = function(props) {
	return(
		<div>
			<h1>Email</h1>
			<Navbar />
			{props.children}
		</div>
	)
}

module.exports = EmailApp;
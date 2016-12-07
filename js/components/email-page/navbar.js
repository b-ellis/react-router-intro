var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Navbar = function(props){
	return(
		<div className='navbar'>
			<ul>
				<li>
					<Link to={'email/inbox/'}>
						Inbox
					</Link>
				</li>
				<li>
					<Link to={'/spam/'}>
						Spam
					</Link>
				</li>
			</ul>
		</div>
	)
}

module.exports = Navbar; 
var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Email = function(props) {
	return (
		<div>
			<Link to={'/email/' + props.id}>
				<h4>{props.title}</h4>
			</Link>
				<div>
					<h5>{props.from}</h5>
					<p>{props.content}</p>
				</div>
		</div>
	);
}

module.exports = Email;
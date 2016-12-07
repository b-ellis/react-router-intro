var React = require('react');

var Email = require('./email');

var EmailList = function(props){
	var inbox = props.inbox;
	return(
		<ul>
			<li key={inbox[0].id}>
				<Email key={inbox.id} inbox={inbox[0]} title={inbox[0].title} from={inbox[0].from} content={inbox[0].content} />
			</li>
			<li key={inbox[1].id}>
				<Email key={inbox.id} inbox={inbox[1]} title={inbox[1].title} from={inbox[1].from} content={inbox[1].content} />
			</li>
		</ul>
	);
}

module.exports = EmailList;
var React = require('react');

var Email = require('./email');

var SpamList = function(props){
	var spam = props.spam;
	return(
		<ul>
			<li key={spam[0].id}>
				<Email key={spam.id} spam={spam[0]} title={spam[0].title} from={spam[0].from} content={spam[0].content} />
			</li>
			<li key={spam[1].id}>
				<Email key={spam.id} spam={spam[1]} title={spam[1].title} from={spam[1].from} content={spam[1].content} />
			</li>
		</ul>
	);
}

module.exports = SpamList;
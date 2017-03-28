var React = require('react');

var About = React.createClass({
	render:function(){
		return (
			<div className="jumbotron">
			<h1>About</h1>
			<ul>
				<li>Apple</li>
				<li>Mango</li>
			</ul>
			</div>
		)
	}
})

module.exports = About
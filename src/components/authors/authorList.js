var React = require('react');


var AuthorList = React.createClass({

	render: function(){
		var creteAuthorRow = function(author){
			return(
				<tr  key={author.id}>
					<td><a href={"/#authors/"+author.id}>{author.id}</a></td>
					<td>{author.firstName}</td>
				</tr>

			)
		};
		return(
			<div>
				<h1>Authors</h1>
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.authors.map(creteAuthorRow,this)}
					</tbody>
				</table>
			</div>
		);
	}
});

 module.exports= AuthorList;
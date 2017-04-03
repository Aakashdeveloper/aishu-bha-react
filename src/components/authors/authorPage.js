var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList')

var Authors = React.createClass({
	getinitialState:function(){
		return{
			authors:[]
		};
		
	},

	componentWillMount:function(){
		this.setState({ authors:AuthorApi.getAllAuthors()});
	},
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
				<AuthorList authors={this.state.authors}/>
				
			</div>
		);
	}
});

 module.exports= Authors;
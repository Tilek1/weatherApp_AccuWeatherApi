import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
	state = {
		post: null
	}

	componentDidMount() {
		console.log(this.props)
		let id = this.props.match.params.post_id;
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				this.setState({
					post: res.data
				})
		})
	}

	render() {

		const postLen = this.state.post ? ( 
				<div className="post">
					<h4>{this.state.post.title}</h4>
					<p>{this.state.post.body}</p>
				</div>
			
			) : (
			 
				<div>
					<h1>No data</h1>
				</div> 
			
			)
		return (
			<div>
				{postLen}
			</div>
		)
	}
}

export default Post
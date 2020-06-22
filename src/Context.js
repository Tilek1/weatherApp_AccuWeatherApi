import React, {Component, createContext} from 'react'

export const Context = createContext();

class ContextProvider extends Component {
	state = {
		track_list: [],
		heading: 'Top 10 Tracks'
	}

	componentDidMount() {
		fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=7e3b86c5d04cd491dadd5abd1c42c85e`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				this.setState({
					track_list: data.message.body.track_list
				})
			})
	}

	render () {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export default ContextProvider;
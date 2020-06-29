import React from 'react';
import Form from './Form'
import Info from './Info'
import {connect} from 'react-redux';

class Right extends React.Component {
	
	state = {
    	loading: false
	}

	handleSubClick = () => {
		this.setState({loading : true})
	}


	render() {
		return (
		<div className="right">
			<Form handleSubClick={this.handleSubClick}/>
			
			{
				this.props.error.length > 0 ? <div>{this.props.error}</div> : this.state.loading && <Info /> 
			}

			
		</div>
	)
	}
}



const mapStateToProps = state => {
	return {
		countryName: state.weather.countryName,
		loading: state.weather.loading,
		error: state.weather.error

	}
}

export default connect(mapStateToProps, null)(Right)
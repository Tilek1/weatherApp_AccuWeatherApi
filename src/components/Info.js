import React from 'react';
import {connect} from 'react-redux';
import Spinner from './Spinner'

const Info = (props) => {
		
	
		if (props.temperature) {	
			return (
				<div className="Info">
					<div className="info-inner">
						<p className="info-text"><span>City:</span>  {props.cityName}</p>
					</div>
					<div className="info-inner">
						<p className="info-text"><span>Country:</span> {props.countryName}</p>
					</div>
					<div className="info-inner">
						<p className="info-text"><span>Temperature:</span>  {props.temperature ? props.temperature + ' ℃' : ''} </p>
					</div>
					
					<div className="info-inner">
						<p className="info-text"><span>Condtions: </span> {props.condition} </p>
					</div>
				</div>
			)
		} else {
			return <Spinner />
		}

	 
	
}

const mapStateToProps = state => {
	return {
		cityName: state.weather.cityName,
		countryName: state.weather.countryName,
		temperature: state.weather.temperature,
		condition: state.weather.condition
	}
}

export default connect(mapStateToProps, null)(Info)
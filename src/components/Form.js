import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

class Form extends React.Component {

	state = {
		text : '',
		country: ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleSubClick()
		console.log('ye')
		if (this.state.text) {		
			this.props.getWeather(this.state.text)
			this.setState({text: '', country : ''})
		} else {
			alert("Please enter a city name")
		}
	
	}
	handleChange = (e) => {
		const {name, value} = e.target
		this.setState({
			[name]: value
		})
	}


	render() {
		return (
			<form className="Form" onSubmit={this.handleSubmit}>
				<input name="text" value={this.state.text} onChange={this.handleChange} className="form-input" type="text" placeholder="City.." />
				<input name="country" value={this.state.country}  onChange={this.handleChange} className="form-input" type="text" placeholder="Country.." />
				<input  className="form-input btn" type="submit" value="Get Weather" />
				
			</form>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    cityName : state.weather.cityName,
    countryName : state.weather.countryName,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: async (name) => {
      let res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09STA56dMWtDvHAT30FAqkTMHffgpQ2276&q=${name}`)
      if (res.data.length > 0) {
	      let res2 = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${res.data[0]['Key']}?apikey=%09STA56dMWtDvHAT30FAqkTMHffgpQ2276`)
	      dispatch({
	        type: 'GET_WEATHER', 
	        payload: [res.data[0], res2.data[0]]
	      })
      } else {
      	alert('There was an error')
      	dispatch({
      		type: "ERROR_OCURRED",
      		payload: 'THERE WAS AN ERROR'
      	})
      }

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)




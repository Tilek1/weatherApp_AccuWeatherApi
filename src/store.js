import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

let initState = {
	info: [],
	cityName: '',
	countryName: '',
	temperature: '',
	condition: '',
	error: '',
	loading: true
}


const getWeatherReducer = (state = initState, action) => {
	switch(action.type) {
		case "GET_WEATHER":
			state = {...state, info: action.payload, cityName: action.payload[0]['LocalizedName'], countryName: action.payload[0]['Country']['LocalizedName'], temperature: action.payload[1]['Temperature']['Metric']['Value'], condition: action.payload[1]['WeatherText'],
			loading: false, error: ''}
			break;
		case "ERROR_OCURRED":
			state = {
				...state,
				info: [],
				error: action.payload,
				cityName: '',
				countryName: '',
				temperature: '',
				condition: '',
				loading: true
			}
			break
		default : 
			return state;
	}
	return state;
}



const store = createStore(combineReducers({weather: getWeatherReducer}), {}, applyMiddleware(thunk))
store.subscribe(() => {
	console.log('Store Updated', store.getState())
})

export default store
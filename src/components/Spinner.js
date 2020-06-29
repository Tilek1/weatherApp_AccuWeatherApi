import React from 'react';
import spinner from './spinner.gif'

const Spinner = (props) => {
	return (
		<div className="Info" style={{textAlign: 'center'}}>
			<img src={spinner} alt="Loading..." style={{width: '100px', marginTop: '100px'}} />
		</div>
	)
}



export default Spinner
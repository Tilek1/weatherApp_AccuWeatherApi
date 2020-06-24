import React from 'react';
import Rainbow from './hoc/Rainbow';

const About = () => {
	return (
		<div className="container">
			<h4 className="center">About</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sapiente dolorem nemo repudiandae quisquam sed, laudantium, ad iusto. Ipsum omnis eum quibusdam ullam, earum quia eos eius ea fuga suscipit!</p>
		</div>
	)
}

export default Rainbow(About);
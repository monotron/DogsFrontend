import React, { Component } from 'react';
import Banner from './Banner';
import DATA from './data';

class ImageView extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	render() {
		return (
			<div>
				<Banner />
				<h1>It works!</h1>
			</div>
		);
	}
}

export default ImageView;
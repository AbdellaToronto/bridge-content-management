import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import UserRepos from './containers/UserRepos';
import './style.css';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<Grid>
					<h2 className="text-center">Home</h2>
					<UserRepos />
				</Grid>
			</div>
		);
	}
}

export default Home;

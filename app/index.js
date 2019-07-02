import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import HomePage from './scenes/home';
import TeamPage from './scenes/team';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="home" component={HomePage} hideNavBar="true" initial />
					<Scene key="team" component={TeamPage} title="Team Page" />
				</Scene>
			</Router>
		);
	}
}

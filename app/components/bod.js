import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Axios from 'axios';
import Config from '../config';

export default class BoD extends Component {
	state = {
		users: [],
		error: ''
	};

	componentDidMount() {
		console.log('getting data from service');

		Axios.get(`${Config.apiUrl}/boards`, {
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			baseURL: 'http://team.crosstech.com.tr'
		})
			.then((r) => {
				console.log(r.data);
				this.setState({ users: r.data });
			})
			.catch((e) => this.setState({ error: 'An error occured' }));
	}

	render() {
		const { users, error } = this.state;

		if (error != '') {
			return (
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<Text>{error}</Text>
				</View>
			);
		}

		if (users.length == 0) {
			return (
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
					<ActivityIndicator size="large" color="#ffa0de" />
				</View>
			);
		}

		return (
			<View style={{ flex: 1, flexDirection: 'row' }}>
				{users.map((user, index) => (
					<TouchableOpacity style={styles.BoD} onPress={() => Actions.team({ user: user.id })} key={index}>
						<View style={{ flex: 1, backgroundColor: `${user.color}`, padding: 20 }}>
							<Text style={styles.BoD}>{`${user.name} ${user.surname}`}</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	BoDcontainer: {
		flex: 1,
		flexDirection: 'row'
	},
	BoD: {
		fontSize: 12,
		flex: 1
	},
	spinnerContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	spinnerHorizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
		backgroundColor: '#fff'
	}
});

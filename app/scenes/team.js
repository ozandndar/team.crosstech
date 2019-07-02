import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee, faUtensils, faTint } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import config from '../config';

class TeamPage extends React.Component {
	state = {
		team: undefined
	};

	componentDidMount() {
		const { user } = this.props;

		Axios.get(`${config.apiUrl}/boards/${user}`)
			.then((r) => {
				this.setState({ team: r.data });
				console.log(`componentDidMount this.state.team.name : ${this.state.team.name}`);
			})
			.catch((e) => console.log(e));
	}

	render() {
		const { team } = this.state;
		console.log(`render team :    ${team} `);
		console.log(team);
		if (team != null) {
			console.log('if statement');
			console.log(team.name);
			console.log(`resim url : ${config.assetUrl}${team.image}`);
			return (
				<View style={[ styles.container, { backgroundColor: '#00a0d0' } ]}>
					<View style={[ { backgroundColor: '#ffa0de', padding: 10, flexDirection: 'row', flex: 1 } ]}>
						<View style={{ flex: 1 }}>
							<View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
								<Image
									source={{ uri: `${config.assetUrl}${team.image}` }}
									// source={"../assets/images/burak.jpg"}
									resizeMode="contain"
									style={{ borderRadius: 50, width: 100, height: 100 }}
								/>
							</View>
						</View>
						<View style={{ flexDirection: 'row', flex: 1 }}>
							<View style={styles.container}>
								<Text style={{ flex: 1 }}>{team.name}</Text>
								<Text style={{ flex: 1 }}>{team.surname}</Text>
								<Text style={{ flex: 1 }}>Pozisyon : {team.position}</Text>
							</View>
						</View>
					</View>
					<View style={{ flex: 0.75, justifyContent: 'center', alignContent: 'center' }}>
						<Text style={{ textAlign: 'center' }}>Board Of Director && Co Founder of Crosstech</Text>
						<Text style={{ textAlign: 'center' }}>"{team.skill}"</Text>
					</View>
					<View style={{ flex: 0.2 }}>
						<Divider style={{ backgroundColor: '#ffffff' }} />
					</View>
					<View style={[ styles.container, { alignItems: 'center' } ]}>
						<Text style={{ fontSize: 20, marginTop: 5 }}>Order SMTH</Text>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center'
							}}
						>
							<View style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
								<TouchableOpacity
									style={{
										width: 50,
										height: 50,
										backgroundColor: '#ffa0de',
										borderRadius: 50,
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<FontAwesomeIcon
										icon={faUtensils}
										color="#fff"
										backgroundColor="#ffa0de"
										size={32}
									/>
								</TouchableOpacity>
							</View>
							<View style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
								<TouchableOpacity
									style={{
										width: 50,
										height: 50,
										backgroundColor: '#ffa0de',
										borderRadius: 50,
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<FontAwesomeIcon icon={faTint} color="#fff" backgroundColor="#ffa0de" size={32} />
								</TouchableOpacity>
							</View>
							<View style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
								<TouchableOpacity
									style={{
										width: 50,
										height: 50,
										backgroundColor: '#ffa0de',
										borderRadius: 50,
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<FontAwesomeIcon icon={faCoffee} color="#fff" backgroundColor="#ffa0de" size={32} />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			);
		} else {
			return (
				<View style={[ styles.spinnerContainer, styles.spinnerHorizontal ]}>
					<ActivityIndicator size="large" color="#ffa0de" />
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
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
		backgroundColor : '#fff'
	}
});

export default TeamPage;

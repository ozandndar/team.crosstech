import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from 'react-native-elements';
import { PageTitle } from '../components/PageTitle';
import Interns from '../components/interns';
import BoD from '../components/bod';

class HomePage extends React.Component {
	state = {
		loading: true
	};

	render() {
		const { loading } = this.state;

		// if (loading) {
		// 	return (
		// 		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
		// 			<ActivityIndicator size="large" color="#ffa0de" />
		// 		</View>
		// 	);
		// }

		return (
			<View style={{ flex: 1 }}>
				<View>
					<Header
						containerStyle={styles.header}
						leftComponent={{ icon: 'menu', color: '#fff' }}
						centerComponent={{ text: 'CROSSTECH', style: { color: '#fff' } }}
						rightComponent={{ icon: 'home', color: '#fff' }}
					/>
				</View>

				<View style={{ flex: 1, justifyContent: 'center', padding: 0, margin: 0, marginTop: -1 }}>
					<PageTitle color={'#ffa0de'} backgroundColor="#565656" title="Team" />
				</View>

				<View style={{ flex: 7 }}>
					<View style={{ flex: 1, flexDirection: 'row', padding: 4 }}>
						<View style={{ flex: 7, alignContent: 'center' }}>
							<Text
								style={{
									flex: 1,
									textAlign: 'right',
									textAlignVertical: 'bottom',
									fontSize: 18,
									borderBottomWidth: 1
								}}
							>
								Board of Directors
							</Text>
						</View>
						<View style={{ flex: 3 }}>
							<Text />
						</View>
					</View>
					<View style={{ flex: 3 }}>
						<BoD />
					</View>
					<View style={{ flex: 1, flexDirection: 'row', padding: 4 }}>
						<View style={{ flex: 3 }}>
							<Text />
						</View>
						<View style={{ flex: 7, alignContent: 'center' }}>
							<Text
								style={{
									flex: 1,
									textAlign: 'left',
									textAlignVertical: 'bottom',
									fontSize: 18,
									borderBottomWidth: 1
								}}
							>
								Interns
							</Text>
						</View>
					</View>
					<View style={{ flex: 3 }}>
						<Interns />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});

export default HomePage;

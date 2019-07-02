import React from 'react';

import { Text } from 'react-native';

export const randomRed = (x) => `#ff${x}00`;

export const PageTitle = (props) => {
	const style = {
		flex: 1,
		width: 120,
		alignSelf: 'flex-end',
		textAlign: 'center',
		alignContent: 'center',
		padding: 10,
		fontSize: 20,
		backgroundColor: props.backgroundColor,
		color: props.color,
		borderBottomWidth : 1,
		borderLeftWidth: 1,
		borderColor : '#ffa0de',
	};

	return <Text style={style}>{props.title}</Text>;
};

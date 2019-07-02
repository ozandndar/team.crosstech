import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './app/index';

export default class App extends Component {
	render() {
		return <Index />;
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

global.XMLHttpRequest = global.originalXMLHttpRequest ? global.originalXMLHttpRequest : global.XMLHttpRequest;
global.FormData = global.originalFormData ? global.originalFormData : global.FormData;

fetch; // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) {
	// it's RNDebugger only to have
	window.__FETCH_SUPPORT__.blob = false;
} else {
	/*
   * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
   * If you're using another way you can just use the native Blob and remove the `else` statement
   */
	global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
	global.FileReader = global.originalFileReader ? global.originalFileReader : global.FileReader;
}

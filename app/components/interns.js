import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Interns extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, backgroundColor: '#a3e5ff' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center' }}>Ozan Dündar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, backgroundColor: '#b7ebff' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center' }}>Baturay Coral</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Hello: {

    }
});

export default Interns;
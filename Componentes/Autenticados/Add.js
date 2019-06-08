import  React, {Component} from 'react';
import {StyleSheet,View, Text} from 'react-native';

export default class Add extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Add</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#2c3e50',
    }
});

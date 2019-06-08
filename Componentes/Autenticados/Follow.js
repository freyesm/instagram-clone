import  React, {Component} from 'react';
import {StyleSheet,View, Text, Button} from 'react-native';

export default class Follow extends Component{
    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>Follow</Text>
                <Button
                    title='Autor'
                    onPress={()=>{navigation.navigate('Autor');}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#2c3e50'
    }
});

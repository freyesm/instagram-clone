import  React, {Component} from 'react';
import {StyleSheet,View, Text, Button} from 'react-native';

export default class Profile extends Component{
    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button
                    title='Publicación'
                    onPress={()=>{navigation.navigate('Publicacion');}}/>
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

import  React, {Component} from 'react';
import {StyleSheet,View, Text, Button} from 'react-native';

class Comentarios extends Component{
    render(){
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text>Comentarios</Text>
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

export default Comentarios;

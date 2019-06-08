import  React, {Component} from 'react';
import {StyleSheet,View, Text, Button} from 'react-native';
import SignInForm from './Formas/SignInForm';

class SignIn extends Component{
    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>SignIn</Text>
                <SignInForm/>
                <Button style={styles.button}
                    title='SignUp'
                    onPress={()=>{navigation.navigate('SignUp');}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#90EE90',
        paddingHorizontal: 16,
    },
    button: {
        paddingBottom: 12
    }
});

export default SignIn;

import React, {Component} from 'react';
import {StyleSheet,View, Text, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';

const fieldNombre = (props) =>{
    console.log(props);
    return(
        <View style={styles.textInput}>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name==='correo'?'email-address':'default'}
                autoCapitalize='none'
                secureTextEntry={!!(props.input.name==='password')}
                onBlur = {props.input.onBlur}
            />
            <View style={styles.linea}/>
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16
    },
    linea: {
        backgroundColor: '#CDCDCD',
        height: 2
    },
    errors: {
        color:'#FF0000'
    },
    button: {
        paddingBottom: 12
    }
});

const validate = (values) => {
    const errors = {};
    if(!values.correo){
        errors.correo = 'Este campo es requerido'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
        errors.correo = 'No es un formato de email válido'
    }

    if(!values.password){
        errors.password = 'Este campo es requerido'
    }else if(values.nombre.length<5){
        errors.nombre = 'Deben ser al menos 5 caracteres'
    }else if(values.nombre.length>15){
        errors.nombre = 'Debe ser menor de 15 caracteres'
    }

    return errors;
};

const SignInForm = (props) => {
    return(
        <View style={styles.button}>
            <Field name="correo" component={fieldNombre} ph="ejemplo@correo.com"/>
            <Field name="password" component={fieldNombre} ph="*******"/>
            <Button
                title='SignIn'
                onPress={props.handleSubmit((values)=>{console.log(values);})}/>
        </View>
    );
};

export default reduxForm({
    form:'SignInForm',
    validate
})(SignInForm);

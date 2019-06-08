import React, {Component} from 'react';
import {StyleSheet,View, Text, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import { autenticacion } from '../../../Store/Servicios/Firebase';

const fieldNombre = (props) =>{
    console.log(props);
    return(
        <View>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name==='correo'?'email-address':'default'}
                autoCapitalize='none'
                secureTextEntry={!!(props.input.name==='password'||props.input.name==='confirmacion')}
                onBlur = {props.input.onBlur}
            />
            <View style={styles.linea}/>
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
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
    if(!values.nombre){
        errors.nombre = 'Este campo es requerido'
    }else if(values.nombre.length<5){
        errors.nombre = 'Deben ser al menos 5 caracteres'
    }else if(values.nombre.length>10){
        errors.nombre = 'Debe ser menor de 10 caracteres'
    }

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

    if(!values.confirmacion){
        errors.confirmacion = 'Este campo es requerido'
    }else if(values.password!==values.confirmacion){
        errors.confirmacion = 'El password debe coincidir'
    }

    return errors;
};

const SignUpForm = (props) => {
  return(
      <View style={styles.button}>
          <Field name="nombre" component={fieldNombre} ph="Nombre"/>
          <Field name="correo" component={fieldNombre} ph="ejemplo@correo.com"/>
          <Field name="password" component={fieldNombre} ph="*******"/>
          <Field name="confirmacion" component={fieldNombre} ph="*******"/>
          <Button
              title='Registrar'
              onPress={props.handleSubmit(props.registro,
                  /*(values)=>{
                  autenticacion.createUserWithEmailAndPassword(values.correo, values.password)
                      .then((success)=>{
                          console.log(success);
                      })
                      .catch(function(error) {
                      // Handle Errors here.
                      var errorCode = error.code;
                      var errorMessage = error.message;
                      console.log(errorCode);
                      console.log(errorMessage);
                  });
              }*/
              )}/>
      </View>
  );
};

export default reduxForm({
    form:'SignUpForm',
    validate
})(SignUpForm);

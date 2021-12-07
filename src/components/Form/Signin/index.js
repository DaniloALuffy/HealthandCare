import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, CheckBox, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Checkbox } from 'react-native-paper';

import { NavigationContainer } from '../../../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../../../node_modules/@react-navigation/stack';

import firebase from '../../../../firebaseConnection';
import Succeeded from './signinSucceeded';

import OutlineInput from 'react-native-outline-input';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import styles from './style';

function SigninForm({ navigation }) {
    function Navegar(){
        navigation.navigate('Succeeded')
    }

    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [pwrd, setPwrd] = useState('')
    const [hidePwrd, setHidePwrd] = useState(true)

    const onChangeName = (txtName) => {
        setName(txtName)
    }
    const onChangeUser = (txtUser) => {
        setUser(txtUser)
    }
    const onChangePwrd = (txtPwrd) => {
        setPwrd(txtPwrd)
    }
    const Registration = () => {
        firebase.auth().createUserWithEmailAndPassword(user,pwrd).then(()=>{
            Navegar()
        })
    }

    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });

    let fontSize = 24;
    let paddingVertical = 6;

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled={true}>
                <SafeAreaView style={styles.formContext}>
                    <View style={{
                        marginLeft: -50, 
                        marginRight: -50, 
                        padding: 45,
                        marginTop: -76,
                        backgroundColor: '#8D31E1'
                    }}>
                        <Text style={{
                            textAlign: 'center', 
                            color: '#fff', 
                            marginTop: 19,
                            marginBottom: -8,
                            fontFamily: 'Quicksand_500Medium',
                            fontSize: 48,
                        }}>Health&Care</Text>
                    </View>
                    <View>
                        <View style={styles.txtName}>
                            <OutlineInput
                                value={name}
                                onChangeText={txtName => onChangeName(txtName)}
                                label="Nome"
                                activeValueColor="#8D31E1"
                                activeBorderColor="#8D31E1"
                                activeLabelColor="#8D31E1"
                                passiveBorderColor="#C99DF0"
                                passiveLabelColor="#C99DF0"
                                passiveValueColor="#C99DF0"
                            />
                        </View>
                        <View style={styles.txtEmail}>
                            <OutlineInput
                                value={user}
                                onChangeText={txtUser => onChangeUser(txtUser)}
                                label="Email"
                                activeValueColor="#8D31E1"
                                activeBorderColor="#8D31E1"
                                activeLabelColor="#8D31E1"
                                passiveBorderColor="#C99DF0"
                                passiveLabelColor="#C99DF0"
                                passiveValueColor="#C99DF0"
                            />
                        </View>
                        <View style={styles.txtPwrdArea}>
                            <View style={styles.txtPwrd}>
                                <OutlineInput
                                    value={pwrd}
                                    onChangeText={txtPwrd => onChangePwrd(txtPwrd)}
                                    label="Senha"
                                    secureTextEntry={hidePwrd}
                                    activeValueColor="#8D31E1"
                                    activeBorderColor="#8D31E1"
                                    activeLabelColor="#8D31E1"
                                    passiveBorderColor="#C99DF0"
                                    passiveLabelColor="#C99DF0"
                                    passiveValueColor="#C99DF0"
                                />
                                <View style={styles.checkboxContainer}>
                                    <Checkbox
                                        status={hidePwrd ? 'unchecked' : 'checked'}
                                        color='#8D31E1'
                                        onPress={() => {
                                            setHidePwrd(!hidePwrd);
                                        }}
                                    />
                                    <Text style={styles.label}>Mostrar senha</Text>
                                </View>

                            </View>

                        </View>

                        <TouchableOpacity
                            style={styles.ButtonLogin}
                            type="clear"
                            onPress={Registration}
                        >
                            <Text style={styles.textButtonLogin}>Registrar-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.ButtonSignin}
                            onPress={ () => navigation.goBack()}
                        >
                            <Text style={styles.textButtonSignin}>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}
const Stack = createStackNavigator();

function RegistrationForm() {

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
        <Stack.Screen name="Form" component={SigninForm}/>
        <Stack.Screen name="Succeeded" component={Succeeded}/>
    </Stack.Navigator>
  );
}

export default RegistrationForm;
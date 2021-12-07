import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, CheckBox, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Checkbox } from 'react-native-paper';
import OutlineInput from 'react-native-outline-input';
import { NavigationContainer } from '../../../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../../../node_modules/@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { Ionicons } from '@expo/vector-icons';
import firebase from '../../../../firebaseConnection';
import styles from './style';
import Routes from '../../routes'
import FailedLogin from './failedLogin'

function LoginForm({ navigation }) {
    function NavegarSucceeded(){
        navigation.navigate('Routes')
    }
    function NavegarFailed(){
        navigation.navigate('FailedLogin')
    }

    const [user, setUser] = useState('')
    const [pwrd, setPwrd] = useState('')
    const [hidePwrd, setHidePwrd] = useState(true)

    const onChangeUser = (txtUser) => {
        setUser(txtUser)
    }
    const onChangePwrd = (txtPwrd) => {
        setPwrd(txtPwrd)
    }
    const login = () =>{
        firebase.auth().signInWithEmailAndPassword(user,pwrd).then(() =>{
            NavegarSucceeded()
        }).catch(()=>{
            NavegarFailed()
        })
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled={true}>
            <View>
                <View style={{
                    backgroundColor: '#8D31E1',
                }}>
                    <Image
                        style={styles.imageTitle}
                        source={require('./titleImg.png')}
                    />
                </View>
            
                <SafeAreaView style={styles.formContext}>
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
                        onPress={login}
                    >
                        <Text style={styles.textButtonLogin}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={styles.divisor}>
                        <View style={styles.divisorLine} />
                        <Text style={{marginHorizontal: '3%'}}>OU</Text>
                        <View style={styles.divisorLine}/>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: '12%', justifyContent: 'center'}}>
                        <Text style={styles.textSignin}>Não possui conta? </Text>
                        <TouchableOpacity
                            onPress={ () => navigation.navigate('Signin')}
                        >
                            <Text style={styles.textButtonSignin}>Registre-se!</Text>
                        </TouchableOpacity>
                    </View>
                    

                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    );
}
const Stack = createStackNavigator();

function LogonForm() {

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
        <Stack.Screen name="LoginForm" component={LoginForm}/>
        <Stack.Screen name="Routes" component={Routes}/>
        <Stack.Screen name="FailedLogin" component={FailedLogin}/>
    </Stack.Navigator>
  );
}

export default LogonForm;
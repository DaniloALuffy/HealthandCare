import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

function signinSucceeded({ navigation }) {
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
        return(
            <View style={styles.formContext}>
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
                <View style={styles.container}>
                    <Text style={styles.textContainer}>Cadastro realizado com sucesso!</Text>
                    <TouchableOpacity
                        style={styles.ButtonLogin}
                        type="clear"
                        onPress={ () => navigation.navigate('Login')}
                    >
                        <Text style={{ 
                            color: '#fff', 
                            marginBottom: 5,
                            fontFamily: 'Quicksand_500Medium',
                            fontSize: 22,
                        }}>Ir para o Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -120,
  },
  textContainer: {
    alignItems: 'center',
    fontSize: 20,
  },
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    padding: 30,
  },
  ButtonLogin: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#9a58d6',
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 80,
  },
});

export default signinSucceeded;
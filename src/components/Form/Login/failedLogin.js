import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from '../../../../node_modules/react-native';

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



function falha({ navigation }) {
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
            <View>
                <View style={{
                    backgroundColor: '#8D31E1',
                }}>
                    <Image
                        style={styles.imageTitle}
                        source={require('./titleImg.png')}
                    />
                </View>
                <View style={styles.formContext}>
                    <View style={styles.container}>
                        <Text style={styles.textContainer}>Email e/ou senha inválidos!</Text>
                        <TouchableOpacity
                            style={styles.ButtonLogin}
                            type="clear"
                            onPress={ () => navigation.goBack()}
                        >
                            <Text style={{ 
                                color: '#fff', 
                                marginBottom: 5,
                                fontFamily: 'Quicksand_500Medium',
                                fontSize: 22,
                            }}>Tentar Novamente</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
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
    height: '62%',
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
    width: '65%',
    backgroundColor: '#9a58d6',
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 80,
  },
  imageTitle: {
    width: 394,
    height: 220,
    marginTop: 10,
    marginBottom: -40,
    alignSelf: 'center',
  },
});

export default falha;
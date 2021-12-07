import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import OneSignal from './node_modules/react-native-onesignal';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Title from './src/components/Title/index';
import TitleS from './src/components/Title/Signin';
import Login from './src/components/Form/Login/index';
import Signin from './src/components/Form/Signin/index';
import Routes from './src/components/routes'
import Diseases from "./src/components/pages/Diseases/index";

import Constants from './node_modules/expo-constants';
import * as Permisssions from './node_modules/expo-permissions';
import { Notifications } from './node_modules/expo';
import firebase from './firebaseConnection';

const Stack = createStackNavigator();


const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary: '#a04ced',
    accent: '#000',
  },
};

export default function NewApp() {

  const [expoPushToken, setExpoPushToken] = useState(null);

  const SalvarToken = () => {
    firebase.firestore().collection('token').add({expoPushToken})
  }

  useEffect(()=>{
    registerForPushNotificationsAsync();
  },[]);

  //Registra o token do usuário
  async function registerForPushNotificationsAsync(){
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        const token = await Notifications.getExpoPushTokenAsync();
        setExpoPushToken(token);
        SalvarToken()
    } else {
        alert('É preciso usar um dispositivo físico para as Notificações Push');
    }

    if (Platform.OS === 'android') {
        Notifications.createChannelAndroidAsync('default', {
            name: 'default',
            sound: true,
            priority: 'max',
            vibrate: [0, 250, 250, 250],
        });
    }
}

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Routes" component={Routes}/>
          <Stack.Screen name="Signin" component={Signin}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D31E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

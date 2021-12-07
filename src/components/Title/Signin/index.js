import React from 'react'
import { View, Text, Image} from 'react-native'
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

export default () => {
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
      <View style={styles.boxTitle}>
        <Text
          style={{
            fontFamily: 'Quicksand_600SemiBold',
            color: '#fff',
            marginTop: 130,
            marginBottom: -10,
            fontSize: 48,
          }}>
          Health&Care
        </Text>
      </View>
    );
  }
};
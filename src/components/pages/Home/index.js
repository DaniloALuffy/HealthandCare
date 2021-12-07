import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '../../../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../../../node_modules/@react-navigation/stack';
import { MaterialCommunityIcons, FontAwesome5, Feather, Ionicons, MaterialIcons } from '../../../../node_modules/@expo/vector-icons';
import { Modalize } from '../../../../node_modules/react-native-modalize';
import Login from '../../Form/Login';

export function Home({ navigation }) {

  const modalizeRef = useRef(null);

  function onOpenModal() {
    modalizeRef.current?.open();
  }
  function onCloseModal() {
    modalizeRef.current?.close();
  }

  function back(){
    navigation.navigate('Login')
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          style={{
            paddingRight: 20,
          }}
          onPress={onOpenModal}
          >
          <MaterialIcons name="logout" color="white" size={28} />
        </TouchableOpacity>
        ),
      });
  }, [navigation]);

  return (
      <View style={styles.container}>
          <View>
            <Text style={{fontSize: 22, marginTop: 15, textAlign: 'center'}}>Olá!</Text>
            <Text style={{fontSize: 20, marginTop: 5, textAlign: 'center'}}>Bem vindo ao aplicativo Health&Care</Text>
          </View>

          <View style={styles.divisor}>
              <View style={styles.divisorLine} />
          </View>

          <View style={{justifyContent:'center', alignItems:'center', padding: 15, flex:1}}>
            <View style={{marginTop:30}}>
              <Text style={styles.texts}>Aqui temos as seguintes funções: </Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:20, marginTop: 20}}>
              <View>
                <View 
                  style={{
                    backgroundColor:'#faebfa',
                    padding: 10,
                    borderRadius:10,
                    borderWidth: 2,
                    borderColor: '#bd6abd',
                    width:155,
                    height: 135,
                    marginRight: 20,
                    marginLeft: -21,
                    justifyContent: 'center',
                  }}
                >
                  <MaterialCommunityIcons name="pill" style={{textAlign:'center', marginTop: -5, marginBottom: 7}} size={50} color="#8D31E1" />
                  <Text style={styles.texts}>Controle de medicamentos</Text>
                </View>
              </View>
              <View>
                <View 
                  style={{
                    backgroundColor:'#fff0ff',
                    padding: 10,
                    borderRadius:10,
                    borderWidth: 2,
                    borderColor: '#bd6abd',
                    width:155,
                    height: 135,
                    justifyContent: 'center',
                  }}
                >
                  <MaterialCommunityIcons name="clock-time-four-outline" style={{textAlign:'center', marginTop: -5, marginBottom: 7}} size={53} color="#8D31E1" />
                  <Text style={styles.texts}>Alarme de notificação</Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection:'row', marginLeft:20, marginTop: 20}}>
              <View>
                <View 
                  style={{
                    backgroundColor:'#fff0ff',
                    padding: 10,
                    borderRadius:10,
                    borderWidth: 2,
                    borderColor: '#bd6abd',
                    width:155,
                    height: 135,
                    marginRight: 20,
                    marginLeft: -21,
                    justifyContent: 'center',
                  }}
                >
                  <Feather name="info" style={{textAlign:'center', marginTop: -5, marginBottom: 7}} size={50} color="#8D31E1" />
                  <Text style={styles.texts}>Informações sobre doenças</Text>
                </View>
              </View>
              <View>
                <View 
                  style={{
                    backgroundColor:'#fff0ff',
                    padding: 10,
                    borderRadius:10,
                    borderWidth: 2,
                    borderColor: '#bd6abd',
                    width:155,
                    height: 135,
                    justifyContent: 'center',
                    marginBottom: 15,
                  }}
                >
                  <MaterialIcons name="add-circle-outline" style={{textAlign:'center', marginTop: -5, marginBottom: 7}} size={53} color="#8D31E1" />
                  <Text style={styles.texts}>Adicionar e salvar registros</Text>
                </View>
              </View>
            </View>
            <View 
              style={{
                marginTop: 10,
                marginBottom: -5,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View 
                style={{
                  width: '98%',
                  height: 2,
                  backgroundColor: '#e8e8e8',
                  borderRadius: 5,
                  marginLeft: -10
                }}
              />
            </View>
            <View style={{justifyContent:'center', alignItems:'center', padding: 15}}>
              <Text style={{fontSize: 18, marginTop: 6, marginBottom: 12}}>Clique no botão do meio para começar!</Text>
              <Text style={styles.texts}>Na aba "Info. Doenças", estão listadas </Text>
              <Text style={styles.texts}>informações relevantes sobre, caso </Text>
              <Text style={styles.texts}>queira saber mais.</Text>
            </View>
          </View>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          

          <Modalize
            ref={modalizeRef}
            snapPoint={180}
            modalHeight={185}
          >
            <View 
              style={{
                flex:1,
                height:180,
                justifyContent:'center',
                alignItems:'center',
              }}
            >
              <Text style={{fontSize:18}}>Deseja sair da conta?</Text>
              <View style={{flexDirection:'row', marginTop:40}}>
                <TouchableOpacity style={styles.botaoNao} onPress={onCloseModal}>
                  <Text style={{fontSize:15}}>Não</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoSim} onPress={ () => navigation.goBack()}>
                  <Text style={{color:'white', fontSize:15}}>Sim</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modalize>

      </View>
  )
}

const Stack = createStackNavigator();

function BackLogin() {

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
        <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex:1,
    alignItems: 'center',
  },
  texts: {
    fontSize: 18,
    textAlign:'center',
  },
  divisor: {
    marginTop: 10,
    marginBottom: -5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisorLine: {
    width: '90%',
    height: 2,
    backgroundColor: '#e8e8e8',
    borderRadius: 5,
  },
  botaoSim: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    backgroundColor: '#923de0',
    padding:10,
  },
  botaoNao: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    padding:10,
    marginRight: 50,
    backgroundColor: '#ededed',
  }
});

export default BackLogin;
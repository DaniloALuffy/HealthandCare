import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, FlatList, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { NavigationContainer } from '../../../../node_modules/@react-navigation/native';
import { createNativeStackNavigator } from '../../../../node_modules/@react-navigation/stack';
import { Picker } from '../../../../node_modules/@react-native-picker/picker';
import DateTimePicker from '../../../../node_modules/@react-native-community/datetimepicker';
import { Entypo, Feather, AntDesign, FontAwesome5, MaterialCommunityIcons, Fontisto } from '../../../../node_modules/@expo/vector-icons';
import { Modalize } from '../../../../node_modules/react-native-modalize';
import ModalAdd from './modalAdd';
import firebase from '../../../../firebaseConnection';
import firestore from '../../../../node_modules/firebase/firestore';

export function New({ navigation }) {

  const modalizeRef = useRef(null);

    const [selectedDisease, setSelectedDisease] = useState('');

    const [medicine, setMedicine] = useState('');

    const [selectedType, setSelectedType] = useState('');

    const [dose, setDose] = useState(0);
    const Sum = () => setDose(prevCount => prevCount + 1);
    const Sub = () => setDose(prevCount => prevCount - 1);

    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    const SalvarDados = () => {
        firebase.firestore().collection('registros').add({Doença:selectedDisease,Remédio:medicine,Tipo:selectedType,Dose:dose,Hora:'20:58'})
        onToggleSnackBar()
    }

    const onChangeMedicine = (txtMedicine) => {
        setMedicine(txtMedicine)
    }

    const onChange = (event, selectedDate) => {
        setShow(Platform.OS === 'ios');
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const clear = () => {
        setSelectedDisease('')
        setMedicine('')
        setSelectedType('')
        setDose('0')
    }

  function onOpen() {
    modalizeRef.current?.open();
  }
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity 
            style={{
              paddingRight: 20,
            }}
            onPress={clear}
            >
            <Feather name="check" color="white" size={28} />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
            <View>
                <View style={styles.container1}>
                    <Text style={styles.textDisease}>Qual a sua doença?</Text>
                    <View style={{paddingLeft: 8}}>
                        <View style={{ 
                                borderWidth: 1, 
                                borderColor: '#b26bf2', 
                                borderRadius: 4, 
                                padding: 10,
                                width: '60%',
                                paddingLeft: 5,
                            }}
                        >
                            <Picker
                                selectedValue={selectedDisease}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedDisease(itemValue)
                                }
                                
                            >
                                <Picker.Item itemStyle={{fontSize: 30}} label="Selecione" value="null" />
                                <Picker.Item label="Não possuo, apenas quero controlar a medicação" value="Sem doença" />
                                <Picker.Item label="Alzheimer" value="Alzheimer" />
                                <Picker.Item label="Anemia" value="Anemia" />
                                <Picker.Item label="Asma" value="Asma" />
                                <Picker.Item label="Colesterol alto" value="Colesterol alto" />
                                <Picker.Item label="Depressão" value="Depressão" />
                                <Picker.Item label="Diabetes" value="Diabetes" />
                                <Picker.Item label="Hipertensão" value="Hipertensão" />
                                <Picker.Item label="Obesidade" value="Obesidade" />
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.divisor}>
                    <View style={styles.divisorLine} />
                </View>

                <View style={styles.container2}>
                    <Text style={styles.textMedicine}>Qual o medicamento tomado?</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={txtMedicine => onChangeMedicine(txtMedicine)}
                        placeholder="Digite aqui"
                    />
                </View>

                <View style={styles.divisor}>
                    <View style={styles.divisorLine} />
                </View>

                <View style={styles.container3}>
                    <Text style={styles.textType}>Qual a forma do medicamento?</Text>
                    <View style={{paddingLeft: 8}}>
                        <View style={{ 
                                borderWidth: 1, 
                                borderColor: '#b26bf2',
                                borderRadius: 4, 
                                padding: 10,
                                width: '60%',
                                paddingLeft: 5,
                            }}
                        >
                            <Picker
                                selectedValue={selectedType}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedType(itemValue)
                                }
                                
                            >
                                <Picker.Item label="Selecione" value="Selecione" />
                                <Picker.Item label="Comprimido" value="Comprimido" />
                                <Picker.Item label="Líquido" value="Líquido" />
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.divisor}>
                    <View style={styles.divisorLine} />
                </View>

                <View style={styles.container4}>
                    <Text style={styles.textDose}>Quantidade a ser tomada por dose: </Text>
                    <View style={{flexDirection: 'row', paddingLeft: 8, paddingTop: 5}}>
                        <TouchableHighlight
                            style = {{
                                height : 30,
                                width : 30,
                                borderRadius: 1000,
                                backgroundColor: '#b26bf2',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            underlayColor = '#cf99ff'
                            onPress={Sub}
                        >
                            <View>
                                <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>  -  </Text>
                            </View>
                        </TouchableHighlight>
                        

                        <Text style={{fontSize: 18, paddingTop: 3}}>    {dose}    </Text>

                        <TouchableHighlight
                            style = {{
                                height : 30,
                                width : 30,
                                borderRadius: 1000,
                                backgroundColor: '#b26bf2',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            underlayColor = '#cf99ff'
                            onPress={Sum}
                        >
                            <View style={{}}>
                                <Text style={{fontSize: 15, color: 'white'}}>  +  </Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                </View>
                
                <View style={styles.divisor}>
                    <View style={styles.divisorLine} />
                </View>

                <View style={styles.container5}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center', marginTop: 8}}>
                        <TouchableOpacity onPress={showTimepicker} style={{backgroundColor: '#f0f0f0', borderRadius: 20}}>
                            <Text style={styles.textTime}>Clique aqui para definir horário da</Text>
                            <Text style={{fontSize: 18, paddingLeft: 105, paddingBottom: 6}}>notificação</Text>
                        </TouchableOpacity>
                    </View>
                    {show && (
                        <DateTimePicker
                        value={time}
                        mode={mode}
                        display="clock"
                        onChange={onChange}
                        />
                    )}
                </View>
                <View style={styles.divisor}>
                    <View style={styles.divisorLine} />
                </View>
                <View style={{paddingLeft: 125, paddingTop: 30}}>
                    <TouchableHighlight
                        style = {{
                            width: '50%',
                            borderRadius: 5,
                            padding: 10,
                            backgroundColor: '#a654f0',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        underlayColor = '#cf99ff'
                        onPress={SalvarDados}
                    >
                        <View>
                            <Text style={{fontSize: 15, color: 'white'}}>Salvar</Text>
                        </View>
                    </TouchableHighlight>
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        duration={5000}
                    >
                        Conteúdo salvo! Você receberá sua notificação no horário desejado.
                    </Snackbar>
                </View>
            </View>
          </ScrollView>
      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#a6a6a6',
    justifyContent: 'center',
  },
  viewFlatList: {
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textFlatList: {
      fontSize: 18,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 18,
    marginLeft: -8,
    paddingTop: 22,
    paddingBottom: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: -8,
    padding: 15,
    paddingBottom: 2,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: -8,
    padding: 15,
    paddingBottom: 10,
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: -8,
    padding: 15,
  },
  container5: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: -8,
    padding: 15,
    paddingBottom: 5,
  },
  textDisease: {
    fontSize: 18,
    paddingLeft: 7,
    paddingBottom: 10,
  },
  textMedicine: {
    fontSize: 18,
    paddingLeft: 7,
  },
  textType: {
    fontSize: 18,
    paddingLeft: 7,
    paddingBottom: 10,
  },
  textDose: {
    fontSize: 18,
    paddingLeft: 7,
  },
  textTime: {
    fontSize: 18,
    paddingLeft: 7,
    paddingTop: 5,
    paddingRight: 6,
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
    width: '95%',
    height: 2,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 3,
    borderWidth: 1.1,
    width: '58%',
    borderColor: '#b26bf2',
    padding: 10,
  },
});

export default New;
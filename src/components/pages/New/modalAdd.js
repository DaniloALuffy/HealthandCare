import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, TouchableHighlight, Dimensions, ScrollView } from 'react-native';

import { Picker } from '../../../../node_modules/@react-native-picker/picker';
import DateTimePicker from '../../../../node_modules/@react-native-community/datetimepicker';
import { NavigationContainer } from '../../../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../../../node_modules/@react-navigation/stack';
import { Snackbar } from 'react-native-paper';

import firebase from "../../../../firebaseConnection";

export function ModalAdd() {
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
        firebase.firestore().collection('registros').add({Doença:selectedDisease,Remédio:medicine,Tipo:selectedType,Dose:dose,Hora:'16:10'})
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
    
    return (
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
                    <Text style={styles.textType}>Qual a o tipo?</Text>
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
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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
                <View style={{paddingLeft: 130, paddingTop: 20}}>
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
                        duration={2000}
                    >
                        Conteúdo salvo!
                    </Snackbar>
                </View>
                <Text>{""}</Text>
                <Text>{""}</Text>
            </View>
        </ScrollView>
    )
}

const Stack = createStackNavigator();

export function RegistrationForm() {

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
        <Stack.Screen name="ModalAdd" component={ModalAdd}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 18,
    paddingTop: 25,
    paddingBottom: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    paddingBottom: 2,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    paddingBottom: 10,
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  container5: {
    flex: 1,
    justifyContent: 'center',
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
    width: '90%',
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
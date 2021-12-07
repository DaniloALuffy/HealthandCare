import React from 'react';
import { ScrollView, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '../../../../node_modules/@react-navigation/native';
import { createNativeStackNavigator } from '../../../../node_modules/@react-navigation/stack';
import { Avatar, Button, Card, Title, Paragraph, useTheme } from 'react-native-paper';
import { SimpleLineIcons } from '../../../../node_modules/@expo/vector-icons'; 


export function Diseases({ navigation }) {
  const { colors } = useTheme();

  function disclaimer() {
    Alert.alert('Aviso legal', 'Embora estas informações tenham sido retiradas de sites confiáveis, nunca as use para se auto-diagnosticar. Para isso, consulte o seu médico.')
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          style={{
            paddingRight: 20,
          }}
          onPress={disclaimer}
          >
          <SimpleLineIcons name="info" color="white" size={25} />
        </TouchableOpacity>
        ),
      });
  }, [navigation]);

  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.card}>
          <Card>
            <Card.Title title="Alzheimer" left={(props) => <Avatar.Text size={44} label="A" />} />
            <Card.Content>
              <Paragraph style={{textAlign: 'justify'}}>
                Alzheimer é uma doença neurodegenerativa progressiva que se manifesta apresentando deterioração cognitiva 
                e da memória de curto prazo e uma variedade de sintomas neuropsiquiátricos e de alterações comportamentais 
                que se agravam ao longo do tempo.
              </Paragraph>
            </Card.Content>
            <View style={{padding:12, marginTop: -20}}>
              <Card.Cover style={{borderRadius:5}} source={{ uri: 'https://i.imgur.com/CYjCE6D.jpg' }} />
            </View>
          </Card>
        </View>
        
        <View style={styles.card}>
          <Card>
            <Card.Title title="Anemia" left={(props) => <Avatar.Text size={44} label="A" />} />
            <Card.Content>
              <Paragraph style={{textAlign: 'justify'}}>
                A anemia é uma condição caracterizada pela queda no conteúdo de hemoglobina, o pigmento que dá cor aos 
                glóbulos vermelhos no sangue. Isso pode ocorrer pela carência de um ou mais nutrientes essenciais, como 
                ferro (de longe o mais comum), zinco, vitamina B12 e proteínas. Também pode ser consequência da perda 
                de sangue ou de diferentes doenças ou condições adquiridas ou hereditárias.
              </Paragraph>
            </Card.Content>
            <View style={{padding:12, marginTop: -20}}>
              <Card.Cover style={{borderRadius:5}} source={{ uri: 'https://i.imgur.com/dK6phOs.png' }} />
            </View>
          </Card>
        </View>

        <View style={styles.card}>
          <Card>
            <Card.Title title="Asma" left={(props) => <Avatar.Text size={44} label="A" />} />
            <Card.Content>
              <Paragraph style={{textAlign: 'justify'}}>
                Asma é uma das doenças respiratórias crônicas mais comuns, juntamente com a rinite alérgica e a doença 
                pulmonar obstrutiva crônica. As principais características dessa doença pulmonar são dificuldade de respirar, 
                chiado e aperto no peito, respiração curta e rápida.
              </Paragraph>
            </Card.Content>
            <View style={{padding:12}}>
              <Card.Cover style={{borderRadius:5}} source={{ uri: 'https://i.imgur.com/QjXEHL7.png' }} />
            </View>
          </Card>
        </View>

        <View style={styles.card}>
          <Card>
            <Card.Title title="Colesterol alto" left={(props) => <Avatar.Text size={44} label="C" />} />
            <Card.Content>
              <Paragraph style={{textAlign: 'justify'}}>
                O colesterol alto (hipercolesterolemia) ocorre quando nosso corpo produz gordura em excesso, 
                o que aumenta o risco de doenças cardiovasculares, como infarto e acidente vascular cerebral (AVC).
              </Paragraph>
            </Card.Content>
            <View style={{padding:12, marginTop: -20}}>
              <Card.Cover style={{borderRadius:5}} source={{ uri: 'https://i.imgur.com/dhpyQxt.jpg' }} />
            </View>
          </Card>
        </View>

        <View style={styles.card}>
          <Card>
            <Card.Title title="Depressão" left={(props) => <Avatar.Text size={44} label="D" />} />
            <Card.Content>
              <Paragraph style={{textAlign: 'justify'}}>
                Depressão é uma doença psiquiátrica crônica e recorrente que produz alteração do humor 
                caracterizada por tristeza profunda e forte sentimento de desesperança. É essencial 
                identificar sintomas e procurar ajuda médica.
              </Paragraph>
            </Card.Content>
            <View style={{padding:12}}>
              <Card.Cover style={{borderRadius:5}} source={{ uri: 'https://i.imgur.com/m1btZ3b.jpg' }} />
            </View>
          </Card>
        </View>

        <View style={styles.card}>
          <Card>
            <Card.Title title="Diabetes" subtitle="Tipo 1 e 2" left={(props) => <Avatar.Text size={44} label="D" />} />
            <Card.Content>
              <Paragraph style={{textAlign: 'justify', marginBottom: -10 /*color: colors.primary*/}}>
                Diabetes é uma doença causada pela produção insuficiente ou má absorção de insulina, 
                hormônio que regula a glicose no sangue e garante energia para o organismo.
              </Paragraph>
            </Card.Content>
            <Text>{""}
            </Text><View style={{padding:12}}>
              <Card.Cover style={{borderRadius:5}} source={{ uri: 'https://i.imgur.com/YpPFVwr.jpg' }} />
            </View>
          </Card>
        </View>

        <View style={styles.card}>
          <Card>
            <Card.Title title="Hipertensão" left={(props) => <Avatar.Text size={44} label="H" />} />
            <Card.Content>
              <Paragraph style={{textAlign: 'justify'}}>
                É uma doença crônica que se caracteriza pela elevação da pressão sanguínea nas artérias. 
                Ela ocorre quando os valores das pressões máxima e mínima são iguais ou superiores 
                a 140/90 mmHg (descrito popularmente como 14 por 9).
              </Paragraph>
            </Card.Content>
            <View style={{padding:12}}>
              <Card.Cover style={{borderRadius:5}} source={{ uri: 'https://i.imgur.com/2qPh9ml.jpg' }} />
            </View>
          </Card>
        </View>
        
        <View style={styles.card}>
          <Card>
            <Card.Title title="Obesidade" left={(props) => <Avatar.Text size={44} label="O" />} />
            <Card.Content>
              <Paragraph style={{textAlign: 'justify'}}>
                Obesidade é uma doença crônica, definida pela Organização Mundial da Saúde (OMS) 
                como o acúmulo anormal ou excessivo de gordura no corpo, capaz de causar alteração 
                funcional, estrutural ou até mesmo comportamental, que prejudica a saúde de crianças, 
                adolescentes e adultos.
              </Paragraph>
            </Card.Content>
            <View style={{padding:12}}>
              <Card.Cover style={{borderRadius:5}} source={{ uri: 'https://i.imgur.com/6E5Espz.jpg' }} />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  card: {
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
  }
});
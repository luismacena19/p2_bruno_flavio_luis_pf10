import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text,TextInput, View} from 'react-native';

export default function Pesquisar() {
    return (
      <View style={styles.container}>
        <Text>Open up pesqiusar.js to start working on your app!</Text>
        <TextInput
            style={styles.input}
            //value={cidade}
           // placeholder='Cidade'
      />
        <Button 
        title='Receber Previsões'
       // onPress={mostrar}
        />  
        

        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });
  
import { Button, 
        FlatList,
        StyleSheet, 
        Text, 
        TextInput, 
        View} from 'react-native';

import { useState } from 'react';
import axios from "axios";
import { ListItem } from '@rneui/themed';

export default function Pesquisar() {
    const [cidade, setCidade] = useState('')

    const capturarTexto = (cidade) => {setCidade(cidade)}

    const [dados, setDados] = useState([])

    const BuscarPrevisaoNoOpenWeather = () => {
         axios.get(`https:api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=6c916327fba2e586d3508924647bf8df&units=metric`)
            .then((response) => {
              console.log(cidade)
              setDados(response.data.list.map(e => {
                return {
                  dt_txt: e.dt_txt,
                  temp_min: e.main.temp_min,
                  temp_max: e.main.temp_max
                }
              }))
              
            })
       
            .catch((error) => {
                console.log(error);
            })
            //post no oracle
    }
  
    return (

            
      <View style={styles.container}>
       
        <TextInput
        style={{borderBottomColor: '#CCC', borderBottomWidth: 2, padding: 12, marginBottom: 4}}
        placeholder="Digite uma cidade"
        onChangeText={capturarTexto}
        value={cidade}
      />
        <Button 
        title='Receber Previsões'
        onPress={BuscarPrevisaoNoOpenWeather}
        />  

        <View>
          <FlatList data={dados} 
                    keyExtractor={item => item.dt}
                   renderItem={({item}) => <Text> {'\n'} data: {item.dt_txt}  {'\n'}
                                                  Minima: {item.temp_min}      Máxima: {item.temp_max} </Text> }/>
        </View>

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
    
  })
  
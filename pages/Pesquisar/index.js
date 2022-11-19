import { FlatList,
        StyleSheet, 
        Text, 
        TextInput, 
        View} from 'react-native';

import { useState } from 'react';
import axios from "axios";
import { Button } from '@rneui/themed';

export default function Pesquisar() {
    const [cidade, setCidade] = useState('')

    const capturarTexto = (cidade) => {setCidade(cidade)}

    const [dados, setDados] = useState([])

    const [oraclepost, setOraclepost]=useState([])

    const BuscarPrevisaoNoOpenWeather = () => {
          axios.get(`https:api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=6c916327fba2e586d3508924647bf8df&units=metric`)
            .then((response) => {
              console.log(cidade)
              setDados(response.data.list.map(e => {
                return {
                  dt_txt: e.dt_txt,
                  temp_min: e.main.temp_min,
                  temp_max: e.main.temp_max,
                  cidade: response.data.city.name,
                  icon: e.weather[0].icon
                }}))
                        
              setOraclepost(response.data.list.map(e => {
                const aux = {
                    cidade: response.data.city.name,
                    datapesquisa: e.dt_txt
                  }
                  return aux
                }))

              console.log(dados[0])
              console.log(oraclepost[0])
              
                var string = oraclepost[0].datapesquisa;
                var final  =  string.substring(0,10) + "T" + string.substring(11) + "Z";
                
                  oraclepost[0] = {cidade: oraclepost[0].cidade, datapesquisa: final}
                  console.log(oraclepost[0])

                  axios.post('https://g665df6fa3d1993-projetorest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tb_historico/',oraclepost[0])
                      .then(()=>{ 
                       console.log('salvo no oracle')
                      })
                      .catch((error) => {
                        console.log(error);
                    })
                })
                .catch((error) => {
                  console.log(error);
          })
    }
    return (   
      <View style={styles.container}>

        <View style={styles.containerList}>
          <FlatList 
            data={dados} 
            keyExtractor={item => item.dt_txt}
            renderItem={({item}) =>
              <Text style={styles.itens}> 
                {'\n'} data: {item.dt_txt}  {'\n'}   icon: {item.icon} Minima: {item.temp_min} Máxima: {item.temp_max}
              </Text> 
            }
            ListHeaderComponent={
              <TextInput
                style={styles.textInputStyles}
                placeholder="Digite uma cidade"
                onChangeText={capturarTexto}
                value={cidade}
              />
            }
            ListFooterComponent={
            <Button 
              title='Receber Previsões'
              onPress={BuscarPrevisaoNoOpenWeather}
              />
           }
          />
        </View>
     </View>     
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerList: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInputStyles: {
      flex:1,
      alignItems: 'center',
      color:'white',
      padding: 12, 
      marginBottom: 4,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius:10,
      backgroundColor:'#40545F',
  },
  itens: {
    flex:1,
    backgroundColor:'#40545F',
    textAlign:'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    fontSize: 25,
    color:'white'
  },
  })
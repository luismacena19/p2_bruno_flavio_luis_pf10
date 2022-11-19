import {Image,
  FlatList,
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
              <View>
               <Image
                style={{width: 50, height: 50}}
                source={{uri: `http://openweathermap.org/img/wn/${item.icon}@2x.png`}}>
                </Image> 
              <Text style={styles.itens}> 
                 Data: {item.dt_txt.substring(8,10)+'/'+
                        item.dt_txt.substring(5,7)+'/'+
                        item.dt_txt.substring(0,4)} 
                        {'\n'}Hora:{item.dt_txt.substring(11,16)}
                        {'\n'} Minima: {item.temp_min}°C    Máxima: {item.temp_max}°C
              </Text>
              </View> 
            }
            ListHeaderComponent={
             <>
             
                  <TextInput
                    name='inputcidade'
                    style={styles.textInputStyles}
                    placeholder="Digite uma cidade"
                    onChangeText={capturarTexto}
                    onKeyPre
                    value={cidade}
                  />
                  <Button 
                    type='solid'
                    size='lg'
                    color='primary'
                    onPress={BuscarPrevisaoNoOpenWeather}
                    icon={{ name: 'search', type: 'ionicon', color: 'white' }}
                    containerStyle={{
                      alignItems: 'center',
                      width: 100,
                      marginVertical: 10,
                      marginRight: 20
                    }}
                    buttonStyle={{
                    borderRadius: 15,
                    }}
                  />
             
            </>
            }
            
          />
        </View>
     </View>     
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center'
    },
    containerList: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     },
    textInputStyles: {
      flex: 1,
      alignItems: 'center',
      color:'black',
      fontSize: 20,
      padding: 12, 
      marginBottom: 4,
      width: 250,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      borderColor: '#FF00FF',
      borderWidth: 2,
      borderRadius:10,
      backgroundColor:'white',
      opacity: 0.45
  },

  itens: {
    flex:1,
    backgroundColor:'rgba(255,105,180,0.35)',
    textAlign:'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    marginTop: 10,
    width: 300,
    fontSize: 25,
    color:'white',
  },
  })